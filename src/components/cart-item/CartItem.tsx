import Button from '@material-ui/core/Button';

import { Wrapper } from './CartItem.styles';
import { FoodItem } from '../../domains/models/food/FoodItem';

type Props = {
  item: FoodItem;
  addToCart: (clickedItem: FoodItem) => void;
  removeFromCart: (id: string) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className='information'>
        <p>Price: ${item.price} -- {item.quantity}</p>
        <p>Total: ${item.getTotalPrice()}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.price}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(new FoodItem({ ...item, quantity: 1 }))}
        >
          +
        </Button>
      </div>
    </div>
  </Wrapper>
);

export default CartItem;