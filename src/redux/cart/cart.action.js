import { cartTypes } from "./cart.types";

export const addCartItems = cartItems => ({
  type: cartTypes.ADD_ITEM_CART,
  payload: cartItems
});
