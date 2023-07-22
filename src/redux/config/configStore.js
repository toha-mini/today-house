import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../module/homeSlice";

const store = configureStore({ reducer: homeSlice });

export default store;
