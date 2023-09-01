import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function CategoryComponent({category}) {
  return (
    <Heading as={"h4"} fontWeight={400} fontSize={"1.2rem"}>
        Category: {category}
    </Heading>
  )
}
