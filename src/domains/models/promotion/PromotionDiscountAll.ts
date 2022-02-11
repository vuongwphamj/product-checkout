import sum from "lodash/sum";
import { FoodItem } from "../food/FoodItem";
import { Promotion } from "./Promotion";

export class PromotionDiscountAll extends Promotion  {
    discountPercentage?: number;
    discountPrice?: number;

    constructor(data: Partial<PromotionDiscountAll>) {
        super(data);
        Object.assign(this, { ...this, ...data });
    }

    getPromotionPrice(items: FoodItem[]): number {
        if (this.discountPrice) {
            return this.discountPrice;
        }

        const totalPrice = sum(items.map(item => item.price * item.quantity));
        return totalPrice * (this.discountPercentage || 0);
    }
}