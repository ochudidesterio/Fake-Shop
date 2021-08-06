import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Header = () => {
  const counter = useSelector((state) => state.allProducts.cart);

  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    let count = 0;
    counter.forEach((item) => {
      count += item.quantity;
    });
    setCountItem(count);
  }, [counter, countItem]);
  return (
    <div className="navHeader">
      <Link link to="/">
        <div className="Home">Fake Shop with Redux</div>
      </Link>

      <Link link to="/cartItem">
        <div className="cart-shop">
          <div className="cart-item">Cart</div>
          <div className="cart-item">{<AddShoppingCartIcon />}</div>
          <div className="cart-item">{countItem}</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
