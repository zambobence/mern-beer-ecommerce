import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import React, { useEffect, useState } from 'react'
import { uiSliceActions } from '../../store/ui/uiSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function CartIcon() {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const toggleCart = () => {
        dispatch(uiSliceActions.toggleCart())
    }

    return (
        <Box onClick={toggleCart}>
            <HStack>
                <Icon as={AiOutlineShoppingCart} />
                <Text display={{base: 'none', md: 'block'}}>Cart</Text>
                {cart.totalProducts > 0 && <Text fontWeight={700}>{cart.totalProducts}</Text>}
            </HStack>
        </Box>
  )
}
