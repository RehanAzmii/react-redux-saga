import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("reducer", action);
  //     return action.data;
  //   } else {
  //     return "no action match";
  //   }
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART CONDITION", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART", action);
      // data.pop();
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      console.log("empty-cart condition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
