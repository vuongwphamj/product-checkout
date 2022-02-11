import { Customer } from "../domains/models/customer/Customer";
import { PromotionType } from "../domains/models/promotion/Promotion";
import { PromotionGetMore } from "../domains/models/promotion/PromotionGetMore";
import { PromotionItemDiscount } from "../domains/models/promotion/PromotionItemDiscount";

export const mockCustomers = [
    new Customer({
        id: 'customer_uuid0',
        name: 'Normal Customer',
    }),
    new Customer({
        id: 'customer_uuid1',
        name: 'Amazon',
        promotions: [new PromotionItemDiscount({
            id: 'promotion_uuid1',
            code: 'AMAZON_PROMOTION',
            name: 'Amazon Promotion',
            description: 'Amazon Promotion description',
            type: PromotionType.ITEM_DISCOUNT,
            foodItemId: 'food_uuid3',
            productDiscountPrice: 19.99
        })]
    }),
    new Customer({
        id: 'customer_uuid2',
        name: 'Facebook',
        promotions: [new PromotionGetMore({
            id: 'promotion_uuid2',
            code: 'FACEBOOK_PROMOTION',
            name: 'Facebook Promotion',
            description: 'Facebook Promotion description',
            type: PromotionType.GET_MORE,
            foodItemId: 'food_uuid2',
            minQuantity: 5,
            promotionQuantity: 4
        })]
    }),
    new Customer({
        id: 'customer_uuid3',
        name: 'Microsoft',
        promotions: [new PromotionGetMore({
            id: 'promotion_uuid3',
            code: 'MICROSOFT_PROMOTION',
            name: 'Microsoft Promotion',
            description: 'Microsoft Promotion description',
            type: PromotionType.GET_MORE,
            foodItemId: 'food_uuid1',
            minQuantity: 3,
            promotionQuantity: 2
        })]
    })
];
