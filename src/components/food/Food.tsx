import Button from '@material-ui/core/Button';
import { Food } from '../../domains/models/food/Food';
import { FoodItem } from '../../domains/models/food/FoodItem';

import { Wrapper } from './Food.styles';

type Props = {
  item: Food;
  handleAddItem: (item: FoodItem) => void
};

const CFood: React.FC<Props> = ({ item, handleAddItem }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddItem(new FoodItem(item))}>Add to cart</Button>
  </Wrapper>
);

export default CFood;