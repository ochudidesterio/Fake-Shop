import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};

const initCart = {
  products: [],
  addedProduct: [
    
  ],
  total: 0,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };

    case actionTypes.REMOVE_SELECTED:
      return {};

    default:
      return state;
  }
};
export const addProductToCartReducer = (state = initCart, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    let addedProductItem = state.products.find(
      (product) => product.id === action.id
    );

    //check if action exists in added product

    let existedProductItem = state.addedProduct.find(
      (product) => action.id === product.id
    );

    if (existedProductItem) {
      addedProductItem += 1;
      return {
        ...state,
        total: state.total + addedProductItem.price,
      };
    } else {
      addedProductItem = 1;
      
      let newTotal = state.total + addedProductItem.price;
      return {
        ...state,
        addedProduct: [...state.addedProduct],
        total: newTotal,

      };
    }
  }else{
    return state
  }
};
