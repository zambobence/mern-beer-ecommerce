import { Box, Heading, Spacer, Text, VStack, Flex, GridItem, Grid, Divider } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartTotalComponent() {
    const cart = useSelector((state) => state.cart)

  return (
    <Grid
        m={"1rem 0"}
        templateColumns={"repeat(6, 1fr)"}
        gap={"1rem"}
    >
        <GridItem colSpan={3}>
            <Heading as={"h4"}>Subtotal</Heading>
            <Text color="grey">{cart.totalProducts} items</Text>
        </GridItem>
        <GridItem colEnd={7}>
            <Heading 
                as={"h4"} 
                fontWeight={600} 
                textAlign={"right"} 
            >
                ${cart.totalAmount.toFixed(2)}
            </Heading>
        </GridItem>

    </Grid>
  )
}
