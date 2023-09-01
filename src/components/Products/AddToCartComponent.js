import React from 'react'
import { HStack, Input, Button, Text } from '@chakra-ui/react'
import PriceComponent from './PriceComponent'
export default function AddToCartComponent(props) {
  return (
    <HStack marginTop={"auto"}>
        <Input textAlign={"center"} maxWidth={"3rem"} padding={".3rem"} name="qty" type="number" value={props.value} onChange={props.onChange} />
        <Button variant='ghost' colorScheme='blue' border={'1px solid'} onClick={props.onClick}>
            Add to cart
        </Button>
        <PriceComponent price={props.price} color={"brand.300"} fontSize={'1.4rem'} marginBottom={"0"} />
    </HStack>
  )
}
