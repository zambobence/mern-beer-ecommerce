import { ButtonGroup, Card, CardBody, CardFooter, Divider, Text, Heading, Image, Stack, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { cartSliceActions } from '../../store/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductTitle from './ProductTitle'
import PriceComponent from './PriceComponent'

export default function ProductCard({product}) {

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(cartSliceActions.addToCart({product: product}))
    }

  return (
    <Card overflow={'hidden'} key={product._id} maxWidth={"400px"}>
        <CardBody>
        <Link to={`/product/${product._id}`}>
            <ProductImage src={product.image} alt={product.title} />
            <Divider />
            <Stack>
                <ProductTitle as='h2' fontSize={'1.4rem'} title={product.title} margin={".75rem 0 0"}/>
                <ProductDescription noOfLines={3} description={product.description} />
            </Stack>
        </Link>
        </CardBody>
        <CardFooter marginTop={".25rem"}>
            <HStack>
                <Button variant='ghost' colorScheme='blue' border={'1px solid'} onClick={handleAddToCart}>
                    Add to cart
                </Button>
                <PriceComponent price={product?.price} color={'blue.600'} fontSize={'1.4rem'} marginBottom={"0"} />
            </HStack>
        </CardFooter>
    </Card>
  )
}
