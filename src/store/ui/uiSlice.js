import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartShown: false,
    notification: {
        visible: false,
        status: null,
        notiTitle: null,
        notiDetails: null,
    },
    isLoading: false
}

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState,
    reducers: {
        setNotification(state, action){
            state.notification = {...action.payload}
        },
        hideNotification(state){
            state.notification.visible = false
        },
        toggleCart(state){
            state.cartShown = !state.cartShown
        },
        toggleLoading(state){
            state.isLoading = !state.isLoading
        }
    }
})

export default uiSlice
export const uiSliceActions = uiSlice.actions