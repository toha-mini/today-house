import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../module/CardSlice";
import selectedSlice_1 from "../module/homeSlice_1";
import selectedSlice_2 from "../module/homeSlice_2";
import selectedSlice_3 from "../module/homeSlice_3";
import selectedSlice_4 from "../module/homeSlice_4";
import menu_1 from "../module/homeMenuSlice_1";
import menu_2 from "../module/homeMenuSlice_2";
import shopping_1 from "../module/shoppingSlice_1";
import photoSlice from "../module/photoSlice";
import interiorSlice from "../module/interiorSlice";

const store = configureStore({
	reducer: {
		cardSlice,
		menu_1,
		menu_2,
		selectedSlice_1,
		selectedSlice_2,
		selectedSlice_3,
		selectedSlice_4,
		shopping_1,
		photoSlice,
		interiorSlice,
	},
});

export default store;
