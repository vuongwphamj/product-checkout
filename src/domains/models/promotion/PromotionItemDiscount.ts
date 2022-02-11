import { FoodItem } from "../food/FoodItem";
import { Promotion } from "./Promotion";

export class PromotionItemDiscount extends Promotion  {
    foodItemId!: string;
    productDiscountPercentage?: number;
    productDiscountPrice?: number;

    constructor(data: Partial<PromotionItemDiscount>) {
        super(data);
        Object.assign(this, { ...this, ...data });
    }

    getPromotionPrice(items: FoodItem[]): number {
        const foodItem = items.find(item => item.id === this.foodItemId);
        if (!foodItem) {
            return 0;
        }

        const totalPrice = foodItem.price * foodItem.quantity;
        if (this.productDiscountPrice) {
            return totalPrice - this.productDiscountPrice * foodItem.quantity;
        }

        return totalPrice - totalPrice * (this.productDiscountPercentage || 0);
    }
}