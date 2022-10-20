import { addToCart, emptyCart, removeToCart } from "../redux/action";

import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data is main component from saga", data);
  const product = {
    name: "I Phone",
    type: "mobile",
    price: "10000",
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove From Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
