import React from 'react'
import { useDispatch } from 'react-redux'
import useNotification from '../../shared/hooks/use-notification'
import { cartSliceActions } from '../../store/cart/cartSlice'
import { Heading, Grid, Text, Button, VStack,HStack, Image, Spacer, Flex, GridItem, Center } from '@chakra-ui/react'
import PriceComponent from '../Products/PriceComponent'

export default function CartItem({item}) {
    const dispatch = useDispatch()
    const {sendNotification} = useNotification()

    const handleIncreaseQty = () => {
        dispatch(cartSliceActions.increaseQty(item))
    }
    const handleDecreaseQty = () => {
        dispatch(cartSliceActions.decreaseQty(item))
    }

    const handleRemoveFromCart = () => {
        dispatch(cartSliceActions.removeFromCart(item))
      }

  return (
        <Grid
            templateColumns={"repeat(6, 1fr)"}
            gap={"1rem"}
            alignItems={"center"}
            m={"1rem 0"}
        >
            <GridItem colSpan={"2"}>
                <Image
                    src={`https://source.unsplash.com/random/400x400/?${item.image}`}
                    alt={item.title}
                    borderRadius='lg'
                    maxWidth={"120px"}
                />
            </GridItem>
            <GridItem colSpan={"2"}>
                <Heading as="h4" fontSize={"1.2rem"}>
                    {item.title}
                </Heading>
            </GridItem>
            <GridItem colSpan={"1"}>
                <HStack>
                    <Button onClick={handleIncreaseQty}>+</Button>
                    <Text>{item.qty}</Text>
                    <Button onClick={handleDecreaseQty}>-</Button>
                </HStack>
            </GridItem>
            <GridItem colSpan={"1"}>
                <VStack alignItems={"flex-end"}>
                    <PriceComponent price={item?.price} />
                    <Text color="red" onClick={handleRemoveFromCart}>Remove</Text>
                </VStack>
            </GridItem>
        </Grid>
  )
}
