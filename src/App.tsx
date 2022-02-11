import React, { useState, useEffect } from 'react';
import './App.css';

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import { Wrapper, StyledButton } from './App.styles';
import { Food } from './domains/models/food/Food';
import { FoodItem } from './domains/models/food/FoodItem';
import { Order } from './domains/models/order/Order';
import { Customer } from './domains/models/customer/Customer';

import CFood from './components/food/Food'
import CCustomer from './components/customer/Customer'
import Cart from './components/cart/Cart'

import { foodService } from './domains/services/food/FoodService';
import { customerService } from './domains/services/customer/CustomerService';


function App() {
  const [customers, setCustomers] = useState([] as Customer[]);
  const [foodMenu, setFoodMenu] = useState([] as Food[]);
  const [cartOpen, setCartOpen] = useState(false);
  const [order, setOrder] = useState(new Order({}));

  useEffect(() => {
    customerService.getCustomers().then(data => {
      if (data && data.length > 0) {
        setCustomers(data.map(item => new Customer(item)))
        console.log(customers)
      }
    });

    foodService.getFoodMenu().then(data => {
      if (data && data.length > 0) {
        setFoodMenu(data.map(item => new FoodItem({ ...item, quantity: 0 })))
      }
    });
  }, [])

  const handleAddItem = (clickedItem: FoodItem) => {
    setOrder((order: Order) => {
      clickedItem.quantity = clickedItem.quantity || 1;
      order.addItem(clickedItem)
      return new Order(order)
    });
  };

  const handleRemoveItem = (id: string) => {
    setOrder((order: Order) => {
      order.subItem(id)
      return new Order(order)
    });
  };

  const handleChooseCustomer = (customer: Customer) => {
    setOrder((order: Order) => {
      if (order.customer?.id === customer.id) {
        return order;
      }
      return new Order({ customer: customer})
    });
  }

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          order={order}
          addToCart = {handleAddItem}
          removeFromCart={handleRemoveItem}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={order.getTotalItem()} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      
      <h3>Choose customer</h3>
      <Grid container spacing={3}>
        {customers.map(customer => (
          <Grid item key={customer.id} xs={3} sm={3}>
            <CCustomer customer={customer} handleChooseCustomer={handleChooseCustomer} />
          </Grid>
        ))}
      </Grid>
      <hr/>
      <h1>Hi {order.customer?.name || 'Customer'}</h1>
      <hr/>
      <h3>Menu</h3>
      <Grid container spacing={3}>
        {foodMenu.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CFood item={item} handleAddItem={handleAddItem} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
