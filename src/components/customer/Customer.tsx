import Button from '@material-ui/core/Button';
import { Customer } from '../../domains/models/customer/Customer';

import { Wrapper } from './Customer.styles';

type Props = {
  customer: Customer;
  handleChooseCustomer: (customer: Customer) => void
};

const CCustomer: React.FC<Props> = ({ customer, handleChooseCustomer }) => (
  <Wrapper>
    <div>
      <h3>{customer.name}</h3>
      <p>Promotion code: {customer.getPromotionCode()}</p>
    </div>
    <Button onClick={() => handleChooseCustomer(customer)}>Choose</Button>
  </Wrapper>
);

export default CCustomer;