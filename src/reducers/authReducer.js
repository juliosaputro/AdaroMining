import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
    name:'auth',
    initialState:{
        access_token:''
    },
    reducers:{
        updateUserToken(state, action) {
            state.access_token = action.payload
        }
    }
})

export const {updateUserToken} = authUser.actions
export default authUser.reducer