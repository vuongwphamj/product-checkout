export class Pricing {
    static round(price: number): string {
        const roundedPrice = Math.round((price || 0) * 100) / 100;
        return roundedPrice.toFixed(2)
    }
}