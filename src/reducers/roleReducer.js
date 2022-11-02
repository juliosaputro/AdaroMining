const {createSlice} = require('@reduxjs/toolkit')

const roleSlice = createSlice({
    name:'role',
    initialState:{
        value:''
    },
    reducers:{
        role(state, action){
            state.value = action.payload
        }
    }

})

export const {role} = roleSlice.actions
export default roleSlice.reducer