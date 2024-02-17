import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	customize:false
}
export const customizeSlice = createSlice({
	name: 'customize',
	initialState,
	reducers: {
		setCustomize: (state,action) => {
			state.customize=action.payload
		}
	}
})

export const { setCustomize } = customizeSlice.actions
export default customizeSlice.reducer;
