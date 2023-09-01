import { createSlice } from "@reduxjs/toolkit";

const initialState = {token: null, isLoggedIn: false, uid: null}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state, action){
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.uid = action.payload.uid
        },
        logout(state){
            state.isLoggedIn = false
            state.token = null;
            state.uid = null
        }
    }
})

export const authSliceActions = authSlice.actions
export default authSlice