import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "../ui/uiSlice";

const initialState = {items: [], totalAmount: 0, totalProducts: 0}

const totalAmountReducer = (array) => {
    return array.reduce((total, item) => total + (item.qty * item.price), 0)
}

const totalProductsReducer = (array) => {
    return array.reduce((total, item) => total + item.qty, 0)
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state, action){
            console.log('AddToCart')
            console.log(action.payload)
            let qty
            qty = action.payload.qty || 1
            console.log('Qty: ', qty, typeof(qty))
            const {id} = action.payload.product
            console.log(id)
            console.log('State ', state.items)
            let item
            item = state.items.find(item => item.id === id)
            console.log(item)
            if (item){
                console.log('itemFound')
                item.qty += qty
                console.log('Item')
                console.log(item)
                state.totalAmount = totalAmountReducer(state.items)
                state.totalProducts = totalProductsReducer(state.items)
            } else {
                console.log('Item not found')
                state.items.push({...action.payload.product, qty})
                state.totalAmount = totalAmountReducer(state.items)
                state.totalProducts = totalProductsReducer(state.items)
            }
        },
        replaceCart(state, action){
            state.items = action.payload.items
            state.totalAmount = action.payload.totalAmount
            state.totalProducts = action.payload.totalProducts
        },
        removeFromCart(state, action){
            const {id} = action.payload
            const updatedCart = state.items.filter( item => item.id !== id)
            state.totalAmount = totalAmountReducer(updatedCart)
            state.totalProducts = totalProductsReducer(updatedCart)
            state.items = updatedCart
        },
        increaseQty(state, action){
            const {id} = action.payload
            const item = state.items.find(item => item.id === id)
            item.qty += 1;
            state.totalAmount = totalAmountReducer(state.items)
            state.totalProducts = totalProductsReducer(state.items)
        },
        decreaseQty(state, action){
            const {id} = action.payload
            const item = state.items.find(item => item.id === id)
            if (item.qty === 1){
                const updatedCart = state.items.filter( item => item.id !== id)
                state.totalAmount = totalAmountReducer(updatedCart)
                state.totalProducts = totalProductsReducer(updatedCart)
                state.items = updatedCart
            } else {
                item.qty -= 1
                state.totalAmount = totalAmountReducer(state.items)
                state.totalProducts = totalProductsReducer(state.items)
            }
        }
    }
})

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiSliceActions.setNotification({
            status: "info",
            notiTitle: "Cart data sending",
            notiDetails: "Cart data is being sent",
            visible: true
        }))
        const sendRequest = async () => {
            const response = await fetch('https://frontendportfolio-b0a92-default-rtdb.firebaseio.com/cart.json', {method: 'PUT', body: JSON.stringify(cart)})
            console.log(response)
            const responseData = await response.json()
            if (!response.ok){
                throw new Error('Something went wrong!')
            }
            return responseData
        }

        try {
            sendRequest()
            dispatch(uiSliceActions.setNotification({
                status: "success",
                notiTitle: "Cart sueccesfully sent",
                notiDetails: "Cart data has been sent succesfully",
                visible: true
            }))
            setTimeout(() => {
                dispatch(uiSliceActions.hideNotification())
            }, 3000)
        } catch(err) {
            dispatch(uiSliceActions.setNotification({
                status: "error",
                notiTitle: err,
                notiDetails: err,
                visible: true
            }))
        }
    }
}

export const fetchCart = () => {
    return  async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://frontendportfolio-b0a92-default-rtdb.firebaseio.com/cart.json')
            const responseData = await response.json()
            if (!response.ok){
                throw new Error('Could not fetch data')
            }
            return responseData
        }
        try {
            const cartData = await sendRequest()
            dispatch(cartSliceActions.replaceCart({...cartData}))
            dispatch(uiSliceActions.setNotification({
                status: "success",
                notiTitle: "Cart sueccesfully fetched",
                notiDetails: "Cart succesfully fetched",
                visible: true
            }))
            setTimeout(() => {
                dispatch(uiSliceActions.hideNotification())
            }, 3000)

        } catch(err) {
            console.log(err)
            dispatch(uiSliceActions.setNotification({
                status: "error",
                notiTitle: err.message,
                notiDetails: err.message,
                visible: true
            }))
        }
    }
}

export const cartSliceActions = cartSlice.actions
export default cartSlice