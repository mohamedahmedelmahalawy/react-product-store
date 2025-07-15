import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice.js";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

console.log(store.getState());
