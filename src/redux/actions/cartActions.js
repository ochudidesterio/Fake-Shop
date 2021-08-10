import { actionTypes } from "../constants/actionTypes";

export const addToCart = (productId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productId,
    },
  };
};
export const updateCartQuantity = (productId, quantity) => {
  return {
    type: actionTypes.UPDATE_CART_QUANTITY,
    payload: {
      id: productId,
      quantity: quantity,
    },
  };
};
export const loadCurrentProduct = (product) => {
  return {
    type: actionTypes.CURRENT_ITEM,
    payload: product,
  };
};
