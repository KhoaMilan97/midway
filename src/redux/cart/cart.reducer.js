import { cartTypes } from "./cart.types";
import { addItem } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  totalPrice: ""
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
