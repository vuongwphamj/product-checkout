import { Order } from "../../models/order/Order";

class OrderService {
    constructor() {}

    checkout(order: Order): Order {
        return order;
    }
}

export const orderService = new OrderService();