import { configureStore } from "@reduxjs/toolkit";
import { selectedSlice } from "../module/selectSlice";
// import homeSlice from "../module/homeSlice";

const store = configureStore({ reducer: { selected: selectedSlice } });

export default store;
