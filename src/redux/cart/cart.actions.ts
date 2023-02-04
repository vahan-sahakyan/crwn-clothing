import CartActionTypes, { CartItem } from './cart.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

export type ToggleCartHidden = Action<CartActionTypes.TOGGLE_CART_HIDDEN>;

export type AddItem = ActionWithPayload<CartActionTypes.ADD_ITEM, CartItem>;
export type RemoveItem = ActionWithPayload<
  CartActionTypes.REMOVE_ITEM,
  CartItem
>;
export type ClearItemFromCart = ActionWithPayload<
  CartActionTypes.CLEAR_ITEM_FROM_CART,
  CartItem
>;
export type ClearCart = Action<CartActionTypes.CLEAR_CART>;

export type CartAction =
  | ToggleCartHidden
  | AddItem
  | RemoveItem
  | ClearItemFromCart
  | ClearCart;

export const toggleCartHidden = withMatcher(
  (): ToggleCartHidden => createAction(CartActionTypes.TOGGLE_CART_HIDDEN)
);

export const addItem = withMatcher(
  (item: CartItem): AddItem => createAction(CartActionTypes.ADD_ITEM, item)
);

export const removeItem = withMatcher(
  (item: CartItem): RemoveItem =>
    createAction(CartActionTypes.REMOVE_ITEM, item)
);

export const clearItemFromCart = withMatcher(
  (item: CartItem): ClearItemFromCart =>
    createAction(CartActionTypes.CLEAR_ITEM_FROM_CART, item)
);

export const clearCart = withMatcher(
  (): ClearCart => createAction(CartActionTypes.CLEAR_CART)
);
