import { createSlice } from "@reduxjs/toolkit";
import shopping1 from "../../imgs/shopping1.avif";
import shopping2 from "../../imgs/shopping2.avif";
import shopping3 from "../../imgs/shopping3.avif";
import shopping4 from "../../imgs/shopping4.avif";

const initialState = [
	{
		src: shopping1,
		maker: "매직캔",
		title: "[쿠폰가 36,295원] 냄새잡는 휴지통 신상 히포크롬 일반히포 21L 27L",
		sale: "27%",
		price: "42,700",
		score: "4.7",
		review: "15,104",
		shipping: true,
		timelimit: "12:00",
		charge: false,
		bestsale: true,
	},
	{
		src: shopping2,
		maker: "코튼앨리",
		title: "[쿠폰가 29,355원] 5+5장 올데이 40수 200g 코마사 호텔수건",
		sale: "47%",
		price: "30,900",
		score: "4.7",
		review: "1,164",
		shipping: false,
		timelimit: null,
		charge: false,
		bestsale: true,
	},
	{
		src: shopping3,
		maker: "데코뷰",
		title: "[7%쿠폰+중복쿠폰] 쾌적한 여름나기 여름패브릭 종결 특가전(이불/커튼/러그/소품)",
		sale: "44%",
		price: "53,100",
		score: "4.6",
		review: "50,725",
		shipping: false,
		timelimit: "13:00",
		charge: true,
		bestsale: true,
	},
	{
		src: shopping4,
		maker: "믹스앤매치",
		title: "[단하루20%쿠폰!/단독]마시멜로우 먼지없는 항균 워싱 이불베개세트SS/Q 11컬러",
		sale: "37",
		price: "449,000",
		score: "4.8",
		review: "875",
		shipping: true,
		timelimit: null,
		charge: false,
		bestsale: true,
	},
];

const shopping_1 = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default shopping_1.reducer;
export const Shopping_1 = (state) => state.shopping_1;
export const { select } = shopping_1.actions;
