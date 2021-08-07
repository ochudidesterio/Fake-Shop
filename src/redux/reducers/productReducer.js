import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case actionTypes.ADD_TO_CART:
      //get items data from products array
      const productItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      //check if item is alredy in the cart
      const inCart = state.cart.find((productItem) =>
        productItem.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((productItem) =>
              productItem.id === action.payload.id
                ? { ...productItem, quantity: productItem.quantity + 1 }
                : productItem
            )
          : [...state.cart, { ...productItem, quantity: 1 }],
      };

    case actionTypes.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((productItem) =>
          productItem.id === action.payload.id
            ? { ...productItem, quantity: +action.payload.quantity }
            : productItem
        ),
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (productItem) => productItem.id !== action.payload.id
        ),
      };
      


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

// export const cartReducer = (state = initialState, action) => {
//   // let cart = state.cart;
//   switch (action.type) {
//     case actionTypes.ADD_TO_CART:
//       //get items data from products array
//       const productItem = state.products.find(
//         (product) => product.id === action.payload.id
//       );
//       //check if item is alredy in the cart
//       const inCart = state.cart.find((productItem) =>
//         productItem.id === action.payload.id ? true : false
//       );

//       return {
//         ...state,
//         cart: inCart
//           ? state.cart.map((productItem) =>
//               productItem.id === action.payload.id
//                 ? { ...productItem, quantity: productItem + 1 }
//                 : productItem
//             )
//           : [...state.cart, { ...productItem, quantity: 1 }],
//       };

//     case actionTypes.UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map((productItem) =>
//           productItem.id === action.payload.id
//             ? { ...productItem, quantity: action.payload.quantity }
//             : productItem
//         ),
//       };

//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter(
//           (productItem) => productItem.id !== action.payload.id
//         ),
//       };

//     default:
//       return state;
//   }
// };
