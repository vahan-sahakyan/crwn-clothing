import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

// import './cart-icon.styles.scss';
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = props => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  // const { toggleCartHidden, itemCount } = props;
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
