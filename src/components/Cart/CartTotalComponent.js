import { Box, Heading, Spacer, Text, VStack, Flex, GridItem, Grid, Divider } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartTotalComponent(props) {
    const cart = useSelector((state) => state.cart)

  return (
    <Grid
        m={{base: "1rem 0", md: "auto 0 0"}}
        templateColumns={"repeat(6, 1fr)"}
        gap={"1rem"}
        marginTop={"auto"}
        bgColor={"red"}
    >
        <GridItem colSpan={3}>
            <Heading as={"h4"} fontSize={"1.8rem"}>Subtotal</Heading>
            <Text color="grey">{cart.totalProducts} items</Text>
        </GridItem>
        <GridItem colEnd={7}>
            <Heading
                as={"h4"}
                fontWeight={600}
                textAlign={"right"}
                fontSize={"1.8rem"}
            >
                ${cart.totalAmount.toFixed(2)}
            </Heading>
        </GridItem>

    </Grid>
  )
}
