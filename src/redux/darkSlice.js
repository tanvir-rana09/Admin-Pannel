import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	dark:'light'
}
export const darkSlice = createSlice({
	name: 'dark',
	initialState,
	reducers: {
		setDark: (state,action) => {
			state.dark=action.payload
		}
	}
})

export const { setDark } = darkSlice.actions
export default darkSlice.reducer;


