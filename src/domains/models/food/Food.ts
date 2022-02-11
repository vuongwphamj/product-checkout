export class Food {
    id!: string;
    name: string | undefined;
    description?: string;
    price: number = 0;

    constructor(data: Partial<Food>) {
        Object.assign(this, { ...this, ...data });
    }
}