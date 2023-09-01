import { ButtonGroup, Card, CardBody, CardFooter, Divider, Text, Heading, Image, Stack, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { cartSliceActions } from '../../store/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductTitle from './ProductTitle'
import PriceComponent from './PriceComponent'
import {useSelector} from 'react-redux'

export default function ProductCard({product}) {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(cartSliceActions.addToCart({product: product}))
    }

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/auth?mode=login')
    }

    const {isLoggedIn} = useSelector(state => state.auth)

  return (
    <Card
        overflow={'hidden'}
        maxWidth={"400px"} _hover={{filter: "drop-shadow(0px 2px 1px grey)"}} cursor={"pointer"}>
        <CardBody>
        <Link to={`/product/${product._id}`}>
            <ProductImage src={product.image} alt={product.title}/>
            <Divider />
            <Stack>
                <ProductTitle as='h2' fontSize={'1.4rem'} title={product.title} margin={".75rem 0 0"}/>
                <ProductDescription noOfLines={3} description={product.description} />
            </Stack>
        </Link>
        </CardBody>
        <CardFooter paddingTop={"0"} justifyContent={"space-between"}>
                {isLoggedIn ? 
                    <Button variant='ghost' colorScheme='brand' border={'1px solid'} onClick={handleAddToCart} _hover={{backgroundColor: "brand.300", color: "black", border: "transparent"}}>
                        Add to cart
                    </Button>
                :
                    <Button variant='ghost' colorScheme='brand' border={'1px solid'} onClick={navigateToLogin} _hover={{backgroundColor: "brand.300", color: "black", border: "transparent"}}>
                        Login
                    </Button>
                }
                <PriceComponent price={product?.price} color={'brand.300'} fontSize={'1.4rem'} marginBottom={"0"} fontWeight={500} />
        </CardFooter>
    </Card>
  )
}
