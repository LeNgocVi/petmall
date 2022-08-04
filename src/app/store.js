import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./Slice/cartSlice";
const rootReducer = {
  cart: CartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
