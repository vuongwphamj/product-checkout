import { mockFoods } from '../mock/food';
import { Order } from "../domains/models/order/Order"
import { FoodItem } from "../domains/models/food/FoodItem"
import { mockCustomers } from "../mock/customer"

describe('Product Checkout', () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    describe('senarios', () => {
        it('should return order.totalPrice equal 49.97 when Normal Customer order 1 Small, 1 Medium and 1 Large Piza', () => {
            const mockNormalCustomer = mockCustomers[0];
            const mockOrder = {
                id: 'order_uuid1',
                customer: mockNormalCustomer,
            }

            const smallPiza = new FoodItem({
                ...mockFoods[0],
                quantity: 1
            })
            const mediumPiza = new FoodItem({
                ...mockFoods[1],
                quantity: 1
            })
            const largePiza = new FoodItem({
                ...mockFoods[2],
                quantity: 1
            })
            
            const order = new Order(mockOrder)
            order.addItem(smallPiza)
            order.addItem(mediumPiza)
            order.addItem(largePiza)

            expect(order.getTotalPrice()).toEqual('49.97')
        })

        it('should return order.totalPrice equal 45.97 when Microsoft order 3 Small and 1 Large Piza', () => {
            const mockMicrosoftCustomer = mockCustomers[3];
            const mockOrder = {
                id: 'order_uuid1',
                customer: mockMicrosoftCustomer,
            }

            const smallPiza = new FoodItem({
                ...mockFoods[0],
                quantity: 3
            })
            const largePiza = new FoodItem({
                ...mockFoods[2],
                quantity: 1
            })
            
            const order = new Order(mockOrder)
            order.addItem(smallPiza)
            order.addItem(largePiza)

            expect(order.getTotalPrice()).toEqual('45.97')
        })

        it('should return order.totalPrice equal 67.96 when Amazon order 3 Medium and 1 Large Piza', () => {
            const mockAmazonCustomer = mockCustomers[1];
            const mockOrder = {
                id: 'order_uuid1',
                customer: mockAmazonCustomer,
            }
            const mediumPiza = new FoodItem({
                ...mockFoods[1],
                quantity: 3
            })
            const largePiza = new FoodItem({
                ...mockFoods[2],
                quantity: 1
            })

            const order = new Order(mockOrder)
            order.addItem(mediumPiza)
            order.addItem(largePiza)

            expect(order.getTotalPrice()).toEqual('67.96')
        })        
    })
})