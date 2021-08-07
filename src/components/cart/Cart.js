import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import Card from "@material-ui/core/Card";
import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";



const Cart = () => {

  const cart = useSelector(state=>state.allProducts.cart)
  
  const[total,setTotal]=useState(0)
  const[items,setItems]=useState(0)

  useEffect(()=>{
    let items=0
    let price =0

    cart.forEach(item=>{
      items +=item.quantity
      price +=item.quantity * item.price
    })
    setTotal(price)
    setItems(items)

  },[cart,total,setTotal,items,setItems])
  return (
    <>
      <div className="Cart-home">
        <CartItem/>

        <div className="cart-cashier">
          <Card>
            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <div className='cart-summary-items'>
                <div>Total {items}: items(s)</div>
                <div>Price: $ {total}</div>
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
