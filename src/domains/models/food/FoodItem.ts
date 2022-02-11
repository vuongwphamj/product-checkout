import { Food } from "../food/Food";
import { Pricing } from "../../../utils/pricing"

export class FoodItem extends Food {
    note?: string;
    quantity: number = 1;

    constructor(data: Partial<FoodItem>) {
        super(data);
        Object.assign(this, {...this, ...data});
    }

    add() {
        this.quantity += 1;
    }

    sub() {
        this.quantity -= 1;
    }

    getTotalPrice() {
        return Pricing.round(this.quantity * this.price);
    }
}