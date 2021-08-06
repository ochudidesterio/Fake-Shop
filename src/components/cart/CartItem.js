import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import img from "../Yark-Blue-School-Bag-SDL285798089-1-ed5c2.jpg";

const CartItem = () => {
  const cartItem = useSelector(state=>state.allProducts.cart)

  const renderCartItems = cartItem.map((item)=>{

    const { id, title, image, price, category,quantity } = item;

    return(

      <Card style={{ marginBottom: "10px" }} key={id}>
        <div className="cartItem">
          <div className="cartImage">
            <img className="cart-img" src={image} alt="item" />
          </div>
          <div className="cartDesc">
            <div className="cart-title">{title}</div>
            <div className='cart-category'>{category}</div>
            <div className="cart-price">$ {price}</div>
            <div className="cart-qty">Quantity: {quantity}</div>

          </div>
          <div className="cart-remove">
            <Button
              variant="contained"
              style={{color:'#2e8b57'}}
              startIcon={<DeleteIcon />}
            >
              Remove
            </Button>
          </div>
        </div>
      </Card>

  )

  })
  return (
    <div>
      {Object.keys(cartItem).length === 0 ? (
        <div className="wait">Please wait... </div>
      ) : (
        renderCartItems
      )}
    </div>
  );
};

export default CartItem;
