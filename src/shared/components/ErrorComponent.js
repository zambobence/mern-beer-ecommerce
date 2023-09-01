import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import React from 'react'

export default function ErrorComponent({data}) {
  return (
    <Box border={"1px solid red"} backgroundColor={"red.100"} textAlign={"center"} padding={"1rem .5rem"} margin={"1rem 0"} borderRadius={"1rem"}>
        <Heading as={"h3"} fontWeight={500} color={"red"} fontSize={"1.2rem"}>{data.msg}</Heading>
        <List spacing={3} listStyleImg={"none"} margin>
            {Object.values(data.errors).map(err => <ListItem key={err.path}>{err.msg}</ListItem>)}
        </List>
    </Box>
  )
}
