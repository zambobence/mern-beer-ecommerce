import React from 'react'
import OrderItem from './OrderItem'
import {Heading, Flex, Text, VStack, Box} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function OrderComponent(props) {
    if (props.orders.length === 0 || !props.orders){
        return (<VStack minHeight={"70vh"} justifyContent={"center"}><Heading>No orders found</Heading></VStack>)
    }

    const orderTableRows = props.orders.map(order => <OrderItem key={order._id} order={order} />)

    return (
        <TableContainer>
            <Table>
            <TableCaption>Prevoius orders</TableCaption>
            <Thead>
                <Tr>
                    <Th>Order ID</Th>
                    <Th>Order Date</Th>
                    <Th>Total Amount</Th>
                </Tr>
            </Thead>
            <Tbody>
                {orderTableRows}
            </Tbody>
        </Table>
    </TableContainer>
  )
}
