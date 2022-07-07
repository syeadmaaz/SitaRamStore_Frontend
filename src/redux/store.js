import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// import productsReducer from "./productsSlice";
// import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // products: productsReducer,
    // ui: uiReducer
  },
});

export default store;
