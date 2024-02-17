
import { configureStore } from "@reduxjs/toolkit";
import colorSlice  from "./colorSlice";
import darkSlice  from "./darkSlice";
import customizeSlice from "./customize";

export const store = configureStore({
	reducer:{
		color:colorSlice,
		dark: darkSlice,
		customize:customizeSlice
	},
	// reducer: {
	// 	color: colorSlice,
	// 	dark: darkSlice,
	// }
})

export default store