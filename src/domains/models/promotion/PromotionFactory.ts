import { Promotion, PromotionType } from "./Promotion";
import { PromotionDiscountAll } from "./PromotionDiscountAll";
import { PromotionGetMore } from "./PromotionGetMore";
import { PromotionItemDiscount } from "./PromotionItemDiscount";

export class PromotionFactory {
    createPromotion(promotion: Partial<Promotion>): Promotion {
       switch (promotion.type) {
            case PromotionType.DISCOUNT_ALL:
                return new PromotionDiscountAll(promotion);
            case PromotionType.GET_MORE:
                return new PromotionGetMore(promotion);
            case PromotionType.ITEM_DISCOUNT:
                return new PromotionItemDiscount(promotion);
            default:
                throw new Error("Promotion Type not valid");
       }
    }
}