import { FoodItem } from "../food/FoodItem";

export enum PromotionType {
    GET_MORE = 'get_more',
    ITEM_DISCOUNT = 'item_discount',
    DISCOUNT_ALL = 'discount_all'
}

export class Promotion {
    id!: string;
    code!: string;
    name!: string;
    description?: string;
    type!: PromotionType;

    constructor(data: Partial<Promotion>) {
        Object.assign(this, { ...this, ...data });
    }

    getPromotionPrice(items: FoodItem[]): number {
        return 0;
    }
}