import CartActionTypes from './cart.types';

import { addItemToCart } from './cart.utils';
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

    // Increment Cart Items

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    // Return Same State

    default:
      return state;
  }
};

export default cartReducer;
