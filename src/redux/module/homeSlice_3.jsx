import { createSlice } from "@reduxjs/toolkit";
import housewarming9 from "../../imgs/housewarming9.avif";
import housewarming10 from "../../imgs/housewarming10.jpeg";
import housewarming11 from "../../imgs/housewarming11.jpeg";
import housewarming12 from "../../imgs/housewarming12.jpeg";

const initialState = [
	{ src: housewarming9, title: "0원 습도 잡는 팁", text: "습기 제거에 돈 쓰지 마세요!" },
	{ src: housewarming10, title: "말끔 빨래 필수템✨", text: "유용하고 신박한 세탁망&옷걸이5" },
	{ src: housewarming11, title: "번개치는 날⚡", text: "누전차단기 내려갈 때 대처법" },
	{ src: housewarming12, title: "비 올 때 필수✅!", text: "운동화 꿉꿉한 냄새 빼는 법!" },
];

const selectedSlice_3 = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default selectedSlice_3.reducer;
export const Cards_3 = (state) => state.selectedSlice_3;
export const { select } = selectedSlice_3.actions;
