import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCart(state, { payload }) {
      console.log("Redux Page");
      console.log(payload);
      state.length=0;
      var products = payload;
      products.map((item) => {
        state.push(item);
      });
    },
    addToCart(state, { payload }) {
      console.log(payload);

      const { productID } = payload;
      // console.log(productID)

      const find = state.find((item) => item.productID === productID);
      if (find) {
        return state.map((item) =>
          item.productID === productID
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.productID === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.productID === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    removeItem: (state, action) => {
      const productID = action.payload;
      return state.filter((item) => item.productID !== productID);
    },
    clear(state) {
      return [];
    },
    placeOrder(state) {
      return initialState;
    },
  },
});

export const {
  fetchCart,
  addToCart,
  increment,
  decrement,
  removeItem,
  clear,
  placeOrder,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
