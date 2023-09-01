import React from 'react'
import SocialsBox from './SocialsBox'
import { Box, Text, Link, Icon } from '@chakra-ui/react'
import {BsFillBalloonHeartFill} from 'react-icons/bs'
export default function Footer() {
  return (
    <Box textAlign={"center"} as={"footer"} margin={"5rem 0 0"} px={5} py={2} borderTop={"grey 1px solid"} fontSize={"1.2rem"} padding={".5rem"}>
        <Text margin={".5rem 0"}>Coded with <Icon color={"brand.300"} as={BsFillBalloonHeartFill} /> by <Link fontWeight={500} color={"brand.300"} href="https://www.github.com/zambobence" alt="github profile link">Bence Zambo</Link></Text>
        <SocialsBox />
    </Box>
  )
}
