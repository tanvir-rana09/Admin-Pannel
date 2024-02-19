import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	userData: [],
	status: true,
	loading:false
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
		},
		setLoading:(state,action)=>{
			state.loading=action.payload
		}

	}
})

export default userSlice.reducer;
export const { sliceLogin, sliceLogout ,setLoading} = userSlice.actions;