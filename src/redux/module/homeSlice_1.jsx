import { createSlice } from "@reduxjs/toolkit";
import housewarming1 from "../../imgs/housewarming1.jpeg";
import housewarming2 from "../../imgs/housewarming2.jpeg";
import housewarming3 from "../../imgs/housewarming3.jpeg";
import housewarming4 from "../../imgs/housewarming4.jpeg";

const initialState = [
	{ src: housewarming1, title: "따뜻 포근 25평!", text: "홈스타일링 노하우만으로 완성✨" },
	{ src: housewarming2, title: "화이트 앤 우드 로망 실현!", text: "따스한 24평 신혼집" },
	{ src: housewarming3, title: "방 하나에 장만한", text: "쇼룸 같은 드레스룸! 옷 수납의 정석" },
	{ src: housewarming4, title: "오래 사용할 수 있는 가구들로!", text: "아늑한 25평 인테리어" },
];

const selectedSlice_1 = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default selectedSlice_1.reducer;
export const Cards_1 = (state) => state.selectedSlice_1;
export const { select } = selectedSlice_1.actions;
