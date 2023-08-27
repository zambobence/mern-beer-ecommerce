import { createSlice } from "@reduxjs/toolkit";

const initialState = {token: null, isLoggedIn: false, uid: null}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state){
            console.log('Login dispatched')
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

export const authSliceActions = authSlice.actions
export default authSlice