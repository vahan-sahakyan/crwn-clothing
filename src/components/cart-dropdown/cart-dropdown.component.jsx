import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CheckoutButton,
} from './cart-dropdown.styles';

const goToCheckout = history => {
  history.push('/checkout');
};

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CheckoutButton
        onClick={() => {
          goToCheckout(history);
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

// TODO 228 useState Part 1
