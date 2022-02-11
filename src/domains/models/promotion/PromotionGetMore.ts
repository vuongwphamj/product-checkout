import { FoodItem } from "../food/FoodItem";
import { Promotion } from "./Promotion";

export class PromotionGetMore extends Promotion  {
    foodItemId!: string;
    minQuantity!: number;
    promotionQuantity!: number;

    constructor(data: Partial<PromotionGetMore>) {
        super(data);
        Object.assign(this, { ...this, ...data });
    }

    getPromotionPrice(items: FoodItem[]): number {
        if(!this.foodItemId || !this.minQuantity || !this.promotionQuantity) {
            return 0;
        }

        const foodItem = items.find(item => item.id === this.foodItemId);
        if(!foodItem) {
            return 0;
        }

        return (this.minQuantity - this.promotionQuantity) * foodItem.price;
    }
}