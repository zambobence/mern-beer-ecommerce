import { Text } from '@chakra-ui/react'
import React from 'react'

export default function PriceComponent(props) {
    const {price} = props
  return (
    <Text color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight}>$ {price?.toFixed(2)}</Text>

  )
}
