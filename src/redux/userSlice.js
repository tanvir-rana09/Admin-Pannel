import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	userData: [],
	status: false,
}

export const userSlice = createSlice({
	name: 'user Data',
	initialState,
	reducers: {
		sliceLogin: (state, action) => {
			state.status = true,
				state.userData = action.payload
		},
		sliceLogout: (state) => {
			state.status = false,
				state.userData = null
		}
	}
})

export default userSlice.reducer;
export const { sliceLogin, sliceLogout } = userSlice.actions;