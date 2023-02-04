import CartActionTypes, { CartItem } from './cart.types';
import { AnyAction } from 'redux';

import { addItemToCart, removeItemFromCart } from './cart.utils';
import { toggleCartHidden, addItem, removeItem, clearItemFromCart, clearCart } from './cart.actions';

export type CartState = {
  readonly hidden: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (toggleCartHidden.match(action)) {
    return { ...state, hidden: !state.hidden };
  }
  if (addItem.match(action)) {
    return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
  }
  if (removeItem.match(action)) {
    return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
  }
  if (clearItemFromCart.match(action)) {
    return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) };
  }
  if (clearCart.match(action)) {
    return { ...state, cartItems: [] };
  }
  return state;
};

export default cartReducer;
