import React from 'react'
import  {Heading} from '@chakra-ui/react'

export default function ProductTitle(props) {
  return (
    <Heading as={props.as} fontSize={props.fontSize || "initial"} margin={props.margin}>
        {props.title}
    </Heading>
  )
}
