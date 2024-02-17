
import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import darkSlice from "./darkSlice";
import customizeSlice from "./customize";
import userSlice from "./userSlice";

export const store = configureStore({
	reducer: {
		color: colorSlice,
		dark: darkSlice,
		customize: customizeSlice,
		user: userSlice,
	},

})

export default store;