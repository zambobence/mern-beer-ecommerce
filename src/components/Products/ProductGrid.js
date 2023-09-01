import React from 'react'
import ProductCard from './ProductCard'
import { Heading, SimpleGrid, Box, VStack } from '@chakra-ui/react'
export default function ProductGrid({products}) {

    if (products.length === 0 || !products){
        return (<VStack minHeight={"70vh"} justifyContent={"center"}><Heading>No products found</Heading></VStack>)
    }

    const productCards = products.map(e => <ProductCard key={e.id} product={e} />)

    return (
        <SimpleGrid minChildWidth={"230px"} gap={".75rem"}>
            {productCards}
        </SimpleGrid>
    )
}
