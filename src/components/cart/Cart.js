import React from "react";
import "./cart.css";
import Card from "@material-ui/core/Card";
import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";



const Cart = () => {
  return (
    <>
      <div className="Cart-home">
        <CartItem/>

        <div className="cart-cashier">
          <Card>
            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <div className='cart-summary-items'>
                <div>Total 1: items(s)</div>
                <div>Price: $ 1000</div>
              </div>
              <div>
                <Button style={{background:'#035397', marginTop:'40px',color:"#fff"}}>Check Out</Button>
              </div>

              </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cart;
