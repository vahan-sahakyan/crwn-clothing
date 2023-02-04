import { CartItem } from './cart.types';

export const addItemToCart = <CI extends CartItem>(cartItems: CI[], cartItemToAdd: CI) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = <CI extends CartItem>(cartItems: CI[], cartItemToRemove: CI) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  // if only 1 left EXCLUDE from cartItems
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};
