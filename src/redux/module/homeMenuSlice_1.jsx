import { createSlice } from "@reduxjs/toolkit";
import homeicon1 from "../../imgs/mainicon1.webp";
import homeicon2 from "../../imgs/mainicon2.avif";
import homeicon3 from "../../imgs/mainicon3.webp";
import homeicon4 from "../../imgs/mainicon4.avif";
import homeicon5 from "../../imgs/mainicon5.webp";
import homeicon6 from "../../imgs/mainicon6.avif";
import homeicon7 from "../../imgs/mainicon7.avif";
import homeicon8 from "../../imgs/mainicon8.avif";
import homeicon9 from "../../imgs/mainicon9.webp";
import homeicon10 from "../../imgs/mainicon10.webp";

const initialState = [
	{ src: homeicon1, title: "쇼핑하기" },
	{ src: homeicon2, title: "여름초특가" },
	{ src: homeicon3, title: "오늘의딜" },
	{ src: homeicon4, title: "오늘의발견" },
	{ src: homeicon5, title: "장보기" },
	{ src: homeicon6, title: "집들이" },
	{ src: homeicon7, title: "취향의발견" },
	{ src: homeicon8, title: "빠른배송" },
	{ src: homeicon9, title: "쉬운이사" },
	{ src: homeicon10, title: "리모델링" },
];
const menu_1 = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {},
});

export default menu_1.reducer;
export const Menu_1 = (state) => state.menu_1;
export const { select } = menu_1.actions;
