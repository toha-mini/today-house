import { createSlice } from "@reduxjs/toolkit";
import photo1 from "../../imgs/photo1.avif";
import photo2 from "../../imgs/photo2.avif";
import photo3 from "../../imgs/photo3.avif";
import photo4 from "../../imgs/photo4.avif";
import photo5 from "../../imgs/photo5.avif";
import photo6 from "../../imgs/photo5.avif";

const initialState = [
	{ src: photo1, username: "user_1" },
	{ src: photo2, username: "user_2" },
	{ src: photo3, username: "user_3" },
	{ src: photo4, username: "user_4" },
	{ src: photo5, username: "user_5" },
	{ src: photo6, username: "user_6" },
	{ src: photo6, username: "user_6" },
	{ src: photo6, username: "user_6" },
];

const photoSlice = createSlice({
	name: "selectSlice_1",
	initialState,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export default photoSlice.reducer;
export const PhotoReview = (state) => state.photoSlice;
export const { select } = photoSlice.actions;
