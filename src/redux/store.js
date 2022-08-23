import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./features/category/categorySlice";
import cartReducer from "./features/cart/cartSlice";
import addressReducer from "./features/address/addressSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});

export default store;
