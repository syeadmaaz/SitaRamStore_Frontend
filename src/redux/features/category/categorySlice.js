import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategory(state, { payload }) {
      console.log("CATEGORIES STORED IN STATE");
      // console.log(payload);
      state.length = 0;
      var category = payload;
      category.map((item) => {
        state.push(item);
      });
      console.log(state);
    },
  },
});

export const { fetchCategory } = categorySlice.actions;
const categoryReducer = categorySlice.reducer;

export default categoryReducer;
