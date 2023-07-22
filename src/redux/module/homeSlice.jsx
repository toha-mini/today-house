import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
	name: "selected",
	initialState: null,
	reducers: {
		select: (state, action) => action.payload,
	},
});

export const { select } = selectedSlice.actions;

export default selectedSlice.reducer;
