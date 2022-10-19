import { PRODUCT_LIST } from "./constant";

export const productList = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.log("api data", data);

  return {
    type: PRODUCT_LIST,
    data,
  };
};