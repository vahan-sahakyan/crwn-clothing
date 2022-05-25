import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

// import './cart-icon.styles.scss';
import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = props => {
  const { toggleCartHidden, itemCount } = props;
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
