const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer