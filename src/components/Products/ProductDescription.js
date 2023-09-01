import React from 'react'
import {Text} from '@chakra-ui/react'

export default function ProductDescription(props) {
  return (
    <Text noOfLines={props.noOfLines} fontSize={props.fontSize || "initial"} marginY={props.marginY || "initial"}>
        {props.description}
    </Text>
  )
}
