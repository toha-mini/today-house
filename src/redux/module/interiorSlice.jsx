import { createSlice } from "@reduxjs/toolkit";
import housewarming13 from "../../imgs/housewarming13.jpeg";
import housewarming14 from "../../imgs/housewarming14.avif";
import housewarming15 from "../../imgs/housewarming15.jpeg";
import housewarming16 from "../../imgs/housewarming16.avif";

const initialState = [
	{ src: housewarming13, title: "로망 실현, 테라스로 레벨 업!", text: "추억을 쌓아가는 전원 주택" },
	{ src: housewarming14, title: "모던하고 미니멀하게", text: "세 가족이 사는 20평 아파트" },
	{ src: housewarming15, title: "나의 핑크와 당신의 블랙이", text: "어우러진 '우리'의 집" },
];

const interiorSlice = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default interiorSlice.reducer;
export const Interior = (state) => state.interiorSlice;
export const { select } = interiorSlice.actions;
