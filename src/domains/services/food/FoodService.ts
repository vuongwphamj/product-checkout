import { mockFoods } from "../../../mock/food";
import { Food } from "../../models/food/Food";

class FoodService {
    constructor() {}

    public async getFoodMenu(): Promise<Food[]> {
        return mockFoods;
    }
}

export const foodService = new FoodService();