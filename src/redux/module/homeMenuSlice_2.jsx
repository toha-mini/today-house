import { createSlice } from "@reduxjs/toolkit";
import homeicon11 from "../../imgs/mainicon11.avif";
import homeicon12 from "../../imgs/mainicon12.avif";
import homeicon13 from "../../imgs/mainicon13.avif";
import homeicon14 from "../../imgs/mainicon14.webp";
import homeicon15 from "../../imgs/mainicon15.webp";
import homeicon16 from "../../imgs/mainicon16.webp";
import homeicon17 from "../../imgs/mainicon17.webp";
import homeicon18 from "../../imgs/mainicon18.webp";
import homeicon19 from "../../imgs/mainicon19.webp";
import homeicon20 from "../../imgs/mainicon20.webp";
import homeicon21 from "../../imgs/mainicon21.webp";
import homeicon22 from "../../imgs/mainicon22.webp";
import homeicon23 from "../../imgs/mainicon23.webp";
import homeicon24 from "../../imgs/mainicon24.webp";
import homeicon25 from "../../imgs/mainicon25.webp";
import homeicon26 from "../../imgs/mainicon26.avif";
import homeicon27 from "../../imgs/mainicon27.avif";

const initialState = [
	{ src: homeicon11, title: "가구" },
	{ src: homeicon12, title: "패브릭" },
	{ src: homeicon13, title: "가전·디지털" },
	{ src: homeicon14, title: "주방용품" },
	{ src: homeicon15, title: "식품" },
	{ src: homeicon16, title: "데코·식물" },
	{ src: homeicon17, title: "조명" },
	{ src: homeicon18, title: "수납·정리" },
	{ src: homeicon19, title: "생활용품" },
	{ src: homeicon20, title: "생필품" },
	{ src: homeicon21, title: "유아·아동" },
	{ src: homeicon22, title: "반려동물" },
	{ src: homeicon23, title: "캠핑·레저" },
	{ src: homeicon24, title: "공구·DIY" },
	{ src: homeicon25, title: "인터레어시공" },
	{ src: homeicon26, title: "렌탈" },
	{ src: homeicon27, title: "장보기" },
];
const menu_2 = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {},
});

export default menu_2.reducer;
export const Menu_2 = (state) => state.menu_2;
export const { select } = menu_2.actions;
