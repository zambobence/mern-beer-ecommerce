import React from 'react'
import { Box } from '@chakra-ui/react'
export default function Container(props) {
  return (
    <Box px={props.px}>
        {props.children}
    </Box>
  )
}
