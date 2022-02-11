import { Promotion } from "../promotion/Promotion";

export class Customer {
    id!: string;
    name!: string;
    promotions: Promotion[] = [];

    constructor(data: Partial<Customer>) {
        Object.assign(this, { ...this, ...data });
    }

    getPromotionCode(): string | undefined {
        return this.promotions[0]?.code
    }
}