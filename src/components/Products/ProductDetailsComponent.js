import { GridItem, Heading, Grid, Image, Input, Text, Box, VStack, Divider, HStack, Button, useStatStyles } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/cart/cartSlice'

export default function ProductDetailsComponent({product}) {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(cartSliceActions.addToCart({product: product, qty: Number(qty)}))
    }

    const handleChangeQty = (event) => {
        setQty(event.target.value)
    }

  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={"1.5em"}>
        <GridItem colSpan={{base: '12', md: '5'}}>
            <Box>
            <Image
                src={`http://source.unsplash.com/random/?${product.image}`}
                alt={product.title}
            />
            </Box>
        <Divider />
        </GridItem>
        <GridItem colSpan={{base: '12', md: '7'}}>
            <VStack alignItems={"flex-start"}>
            <Heading as={"h2"}>
                {product.title}
            </Heading>
            <Text fontSize={"1.5rem"}>
                {product.description}
            </Text>
            <Heading as={"h4"} fontSize={"1.7rem"}>
                Category: {product.category}
            </Heading>
            <HStack>
                <Input name="qty" type="number" value={qty} onChange={handleChangeQty} />
                <Button variant='ghost' colorScheme='blue' border={'1px solid'} onClick={handleAddToCart}>
                    Add to cart
                </Button>
                <Text color='blue.600' fontSize='1.4rem' marginBottom={"0"}>
                    $ {product.price}
                </Text>
            </HStack>
            </VStack>
        </GridItem>
    </Grid>
  )
}
