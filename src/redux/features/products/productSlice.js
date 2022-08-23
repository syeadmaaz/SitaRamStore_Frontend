import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct(state, { payload }) {
      console.log("PRODUCTS STORED IN STATE");
      // console.log(payload);
      state.length = 0;
      var product = payload;
      product.map((item) => {
        state.push(item);
      });
      console.log(state);
    },
  },
});

export const { fetchProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
