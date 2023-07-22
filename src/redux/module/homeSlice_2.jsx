import { createSlice } from "@reduxjs/toolkit";
import housewarming5 from "../../imgs/housewarming5.avif";
import housewarming6 from "../../imgs/housewarming6.avif";
import housewarming7 from "../../imgs/housewarming7.webp";
import housewarming8 from "../../imgs/housewarming8.avif";

const initialState = [
	{ src: housewarming5, title: "5778명이 저장했어요", text: "🙋‍♀️반짝반짝 화이트 화장대💄유지 비결 3" },
	{ src: housewarming6, title: "물건 찾아 헤맬 일 x", text: "깔끔한 다용도실 비법은 바로..." },
	{ src: housewarming7, title: "맥주로 새 옷처럼 변신🍺", text: "변색된 옷 원상복구법6" },
	{ src: housewarming8, title: "조회수 100만 돌파!", text: "초간단! 절대 흐트러지지않는 깔끔한 수건정리" },
];

const selectedSlice_2 = createSlice({
	name: "selectSlice_2",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default selectedSlice_2.reducer;
export const Cards_2 = (state) => state.selectedSlice_2;
export const { select } = selectedSlice_2.actions;
