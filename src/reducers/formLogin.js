import { createSlice } from "@reduxjs/toolkit";

const formLogin = createSlice({
    name: 'formLogin',
    initialState: {
        email: {
            value: '',
            error: false,
            message: ''
        },
        password: {
            value: '',
            error: false,
            message: ''
        },
        role:{
            value:'',
            error:false,
            message:''
        }
    },
    reducers: {
        updateFormLogin(state, action) {
            const { payload: { field, value } } = action
            // console.log(value)
            state[field].value = value

            if (value != "") {
                state[field].error = false
                state[field].message = ""
            }
        },
        updateErrorFormLogin(state, action) {
            const obj = { ...state }

            Object.keys(obj).map((key) => {
                // console.log("key : ", key)
                if (key in action.payload) {
                    obj[key].error = true
                    obj[key].message = action.payload[key][0]
                }
            })
        },
        // role(state, action) {
        //     state.role.value = action.payload
        //     if (state.value != ""){
        //         state.role.error = false
        //         state.role.message = ""
        //     }
        // }
    }
})

export const {updateFormLogin, updateErrorFormLogin, role} = formLogin.actions

export default formLogin.reducer