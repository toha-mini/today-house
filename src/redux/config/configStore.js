import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../module/CardSlice";
import selectedSlice_1 from "../module/homeSlice_1";
import selectedSlice_2 from "../module/homeSlice_2";
import selectedSlice_3 from "../module/homeSlice_3";
import selectedSlice_4 from "../module/homeSlice_4";

const store = configureStore({
	reducer: {
		cardSlice,
		selectedSlice_1,
		selectedSlice_2,
		selectedSlice_3,
		selectedSlice_4,
	},
});

export default store;
