import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddress(state, { payload }) {
      console.log("ADDRESS STORED IN STATE");
      // console.log(payload);
      state.length = 0;
      var address = payload;
      address.map((item) => {
        state.push(item);
      });
      // console.log(state);
    },
    clearAddress(state){
      return [];
    }
  },
});

export const { fetchAddress, clearAddress } = addressSlice.actions;
const addressReducer = addressSlice.reducer;

export default addressReducer;
