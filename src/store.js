import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UseSlice'

const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store