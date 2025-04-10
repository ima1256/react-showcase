import { createSlice } from '@reduxjs/toolkit'

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        value: 0
    },
    reducers: {
        increaseMessages: (state) => {
            state.value += 1
        }
    }
})

export const { increaseMessages } = messagesSlice.actions

export default messagesSlice.reducer