import React from 'react'
import { Text, Box, Icon, Flex } from '@chakra-ui/react'
import {IoBeerOutline} from "react-icons/io5";

export default function Logo() {
  return (
    <Flex color={"brand.300"} alignItems={"center"} gap={".2rem"}>
      <Icon as={IoBeerOutline}/>
      <Text fontWeight={700}>Bee(R)Commerce</Text>
    </Flex>
  )
}
