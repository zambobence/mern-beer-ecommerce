import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import {sendCartData} from '../../store/cart/cartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const handleCheckout = () => {
        dispatch(sendCartData(cart))
    }

    if (!cart.items.length){
        return <h1>Your cart is empty</h1>
    }

  return (
    <div>
        
    </div>
  )
}
