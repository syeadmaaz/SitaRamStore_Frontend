import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct(state, { payload }) {
      // console.log(payload);
      console.log("PRODUCTS STORED IN STATE");
      // state.length = 0;
      var product = payload;
      product.map((item) => {
        state.push(item);
      });
      console.log(state);
    },
    clearProduct(state){
      return [];
    },
  },
});

export const { fetchProduct, clearProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
