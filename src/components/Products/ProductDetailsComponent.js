import React, {useState} from 'react'
import { GridItem, Heading, Grid, Image, Input, Text, Box, Icon, Divider, HStack, Button, useStatStyles, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/cart/cartSlice'
import AddFavourite from './AddFavourite'
import ReviewComponent from './ReviewComponent'
import CategoryComponent from './CategoryComponent'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductTitle from './ProductTitle'
import AddToCartComponent from './AddToCartComponent'

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
    <Grid templateColumns={'repeat(12, 1fr)'} gap={"1.5em"} justifyItems={'stretch'} marginY={'1rem'}>
        <GridItem colSpan={{base: '12', md: '5'}}>
        <ProductImage src={product.image} alt={product.title} />
        <Divider />
        </GridItem>
        <GridItem colSpan={{base: '12', md: '7'}}>
            <Flex flexDirection={"column"} height={{base: 'auto', md:'100%'}} maxWidth={"450px"} spacing={3}>
                <ProductTitle title={product.title} fontSize={'1.8rem'} />
                <ReviewComponent />
                <CategoryComponent category={product.category} />
                <ProductDescription description={product.description} marginY={'1rem'} />
                <AddToCartComponent
                    value={qty}
                    onClick={handleAddToCart}
                    price={product.price}
                    onChange={handleChangeQty}
                />
        {/*
            <AddFavourite />
        */}
            </Flex>
        </GridItem>
    </Grid>
  )
}
