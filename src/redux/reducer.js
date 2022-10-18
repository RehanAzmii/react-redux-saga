import { ADD_TO_CART } from "./constant";

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
    default:
      return data;
  }
};
