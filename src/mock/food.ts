import { Food } from "../domains/models/food/Food";

export const mockFoods = [
    new Food({
        id: 'food_uuid1',
        name: 'Pizza (size: small)',
        description: 'Pizza (size: small) description',
        price: 11.99,
    }),
    new Food({
        id: 'food_uuid2',
        name: 'Pizza (size: medium)',
        description: 'Pizza (size: medium) description',
        price: 15.99
    }),
    new Food({
        id: 'food_uuid3',
        name: 'Pizza (size: large)',
        description: 'Pizza (size: large) description',
        price: 21.99
    })
];
