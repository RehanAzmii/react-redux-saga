import { addToCart, emptyCart, removeToCart } from "../redux/action";

import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data is main component from saga", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {data.map((item, id) => (
          <div className="product-item" key={id}>
            <img src={item.photo} alt="" />
            <div>name:{item.name}</div>
            <div>Color:{item.color}</div>
            <div>Price:{item.price}</div>
            <div>Category:{item.category}</div>
            <div>Brand:{item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
