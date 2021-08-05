import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,addProductToCartReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product:selectedProductReducer,
  addedProduct:addProductToCartReducer,
})

export default reducer