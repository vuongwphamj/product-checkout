import CartItem from '../cart-item/CartItem';
import { Wrapper } from './Cart.styles';

import { FoodItem } from '../../domains/models/food/FoodItem';
import { Order } from '../../domains/models/order/Order';

type Props = {
  order: Order;
  addToCart: (clickedItem: FoodItem) => void;
  removeFromCart: (id: string) => void;
};

const Cart: React.FC<Props> = ({ order, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {order.foodItems.length === 0 ? <p>No items in cart.</p> : null}
      {order.foodItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h4>Price: ${order.getPrice()}</h4>
      <h4>PromotionCode: {order.getPromotionCode()}</h4>
      <h4>Discount: ${order.getDiscountPrice()}</h4>
      <h2>Total: ${order.getTotalPrice()}</h2>
    </Wrapper>
  );
};

export default Cart;