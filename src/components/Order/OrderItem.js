import React from 'react'
import {Flex, Heading, Text} from '@chakra-ui/react'
import {Tr, Td} from '@chakra-ui/react'
export default function OrderItem({order}) {
  return (
    <Tr>
        <Td>
            {order._id}
        </Td>
        <Td>
            {order.totalAmount} USD
        </Td>
        <Td>
            {order.date}
        </Td>
    </Tr>
  )
}
