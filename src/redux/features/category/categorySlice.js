import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategory(state, { payload }) {
      // console.log(payload);
      console.log("CATEGORIES STORED IN STATE");
      // state.length = 0;
      var category = payload;
      category.map((item) => {
        state.push(item);
      });
      // console.log(state);
    },
    clearCategory(state){
      return [];
    }
  },
});

export const { fetchCategory, clearCategory } = categorySlice.actions;
const categoryReducer = categorySlice.reducer;

export default categoryReducer;
