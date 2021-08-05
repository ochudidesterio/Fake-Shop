import { actionTypes } from "../constants/actionTypes";

export const setProducts =(products)=>{
  return{
    type:actionTypes.SET_PRODUCTS,
    payload: products
  }
}
export const seletedProduct =(product)=>{
  return{
    type:actionTypes.SELECTED_PRODUCTS,
    payload: product
  }
}
export const removeSeletedProduct =()=>{
  return{
    type:actionTypes.REMOVE_SELECTED,
   }
}
export const addToCart =(id)=>{
  return{
    type:actionTypes.ADD_TO_CART,
    payload:id
  }
}