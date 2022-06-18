import CartActionTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Toggle Cart Dropdown
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    // cartItem.quantity++
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,

        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    // cartItem.quantity--
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    // exclude cartItem, return the rest
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    // Return Same State
    default:
      return state;
  }
};

export default cartReducer;
