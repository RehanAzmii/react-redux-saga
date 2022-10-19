import { ADD_TO_CART } from "./constant";
import { REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("addtocart action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.log("remove action called", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("empty action called");
  return {
    type: EMPTY_CART,
  };
};
