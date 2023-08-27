import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import cartSlice from './cart/cartSlice'
import uiSlice from './ui/uiSlice'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store