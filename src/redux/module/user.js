// src/redux/module/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
		},
		logout(state, action) {
			state.isLoggedIn = false;
		},
	},
});

export default userSlice.reducer;
export const UserLogInfo = (state) => state.userSlice;
export const { login, logout } = userSlice.actions;
