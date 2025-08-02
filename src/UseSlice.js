import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const FetchUser = createAsyncThunk("users/FetchUser", async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
})

const UseSlice = createSlice({
    name: "users",
    initialState:{
        loading: false,
        users: [],
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(FetchUser.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(FetchUser.fulfilled, (state, action) => {
                state.loading = false,
                state.users = action.payload
            })
            .addCase(FetchUser.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error.message
            })
    }
})

export default UseSlice.reducer