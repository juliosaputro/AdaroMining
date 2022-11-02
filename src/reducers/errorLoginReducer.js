import { createSlice } from "@reduxjs/toolkit";

const errorLogin = createSlice({
    name:'errorLogin',
    initialState:{
        message:''
    },
    reducers:{
        errorFormLogin(state,action) {
            state.message = action.payload
        }
    }
})

export const {errorFormLogin} = errorLogin.actions
export default errorLogin.reducer