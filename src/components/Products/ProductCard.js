import { ButtonGroup, Card, CardBody, CardFooter, Divider, Text, Heading, Image, Stack, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { cartSliceActions } from '../../store/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LazyLoadImage, LazyLoad } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'; // Import desired transition effect

export default function ProductCard({product}) {

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(cartSliceActions.addToCart({product: product}))
    }

  return (
    <Card overflow={'hidden'} >
        <CardBody>
        <Link to={`/product/${product.id}`}>
            <LazyLoadImage
                effect="opacity"
                src={`https://source.unsplash.com/random/400x400/?${product.image}`}
                alt={product.title}
             />
            <Divider />
            <Stack>
                <Heading as='h3' fontSize={'1.4rem'}>
                    {product.title}
                </Heading>
                <Text>
                    {product.description}
                </Text>

            </Stack>
        </Link>
        </CardBody>
        <CardFooter marginTop={".25rem"}>
            <HStack>
                <Button variant='ghost' colorScheme='blue' border={'1px solid'} onClick={handleAddToCart}>
                    Add to cart
                </Button>
                <Text color='blue.600' fontSize='1.4rem' marginBottom={"0"}>
                    $ {product.price}
                </Text>
            </HStack>
        </CardFooter>
    </Card>
  )
}
