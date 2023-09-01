import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ReviewComponent({review}) {
  return (
    <HStack alignItems={"baseline"}>
        <Text fontSize={"1.2rem"}>Rating</Text>
        <Text fontSize={"1.6rem"} fontWeight={500}>
            4.8
        </Text>
        <Text>
            1678 reviews
        </Text>
    </HStack>
  )
}
