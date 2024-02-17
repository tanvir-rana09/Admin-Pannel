import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	colors: '#1BCFB4' 
	
}
export const colorSlice = createSlice({
	name: 'Colors',
	initialState,
	reducers: {
		setColor: (state, action) => {
			state.colors = action.payload
		}
	}
})

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;







// { primary: '#9E58FF' },
// { second: '#FE9496' },
// { third: '#4BCBEB' },
// 
// { lightBlack: '#191C24' }