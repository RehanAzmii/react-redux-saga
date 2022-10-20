import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state.cartData);

  console.log("redux data in header", result);
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <h1 style={{ float: "left", margin: "0", padding: "20px" }}>E-Comm</h1>
      </Link>

      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img src="card.png" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
