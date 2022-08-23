import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import addressReducer from "./features/address/addressSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
    // products: productsReducer,
    // ui: uiReducer
  },
});

export default store;
