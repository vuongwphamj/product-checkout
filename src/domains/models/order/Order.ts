import sum from 'lodash/sum';
import { Promotion } from '../promotion/Promotion';
import { Customer } from "../customer/Customer";
import { Food } from "../food/Food";
import { Pricing } from '../../../utils/pricing';
import { FoodItem } from "../food/FoodItem";

export class Order {
    id!: string;
    customer?: Customer;
    promotion?: Promotion;
    foodItems: FoodItem[] = [];
    private price: number = 0;
    private discountPrice: number = 0;
    private totalPrice: number = 0;
    dateTime!: Date;

    constructor(data: Partial<Order>) {
        Object.assign(this, { ...this, ...data });
        this.setPromotion(this.customer)
        this.dateTime = new Date();
    }

    private setPromotion(customer: Customer | undefined) {
        // order will get first customer's promotions
        this.promotion = customer?.promotions[0];
    }

    private calculate() {
        this.price = sum(this.foodItems.map(foodItem => foodItem.quantity * foodItem.price))
        this.discountPrice = this.promotion?.getPromotionPrice(this.foodItems) || 0;
        this.totalPrice = this.price - this.discountPrice;
    }

    public addItem(foodItem: FoodItem) {
        if(!foodItem.id) {
            throw new Error('Item not found');
        }

        const existIndexFoodItem = this.foodItems.findIndex((item: FoodItem) => item.id === foodItem.id);
        if (existIndexFoodItem >= 0) {
            this.foodItems[existIndexFoodItem].add()
        } else {
            this.foodItems.push(foodItem)
        }

        this.calculate();

        return this;
    }

    public subItem(id: string) {
        const existIndexFoodItem = this.foodItems.findIndex((item: FoodItem) => item.id === id);
        if (existIndexFoodItem >= 0) {
            this.foodItems[existIndexFoodItem].sub()
        }

        this.calculate();

        return this;
    }

    public getTotalPrice(): string {
        return Pricing.round(this.totalPrice);
    }

    public getPrice(): string {
        return Pricing.round(this.price);
    }

    public getDiscountPrice(): string {
        return Pricing.round(this.discountPrice);
    }

    public getTotalItem(): number {
        return this.foodItems.length;
    }

    public setCustomer(customer: Customer) {
        this.customer = customer;
        this.setPromotion(customer);
    }

    public getPromotionCode(): string | undefined {
        return this.promotion?.code;
    }
}