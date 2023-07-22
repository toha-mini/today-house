import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../module/CardSlice";
// import homeSlice from "../module/homeSlice";

const store = configureStore({
  reducer: {
    cardSlice,
  },
});

export default store;
