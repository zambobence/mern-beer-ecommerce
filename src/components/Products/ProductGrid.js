import React from 'react'
import ProductCard from './ProductCard'
import { Heading, SimpleGrid, Box } from '@chakra-ui/react'
export default function ProductGrid({products}) {

    if (products.lengh === 0 || !products){
        return <Box><Heading>No products found</Heading></Box>
    }

    const productCards = products.map(e => <ProductCard key={e.id} product={e} />)

    return (
        <SimpleGrid minChildWidth={"230px"} gap={".75rem"}>
            {productCards}
        </SimpleGrid>
    )
}
