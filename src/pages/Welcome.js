import React from 'react'
import {Link}from 'react-router-dom'
import {Text, Heading, Box, Button, VStack} from '@chakra-ui/react'
import HeroImage from '../assets/hero_img.jpg'

export default function Welcome() {
  return (
    <Box>
      <VStack bgImage={HeroImage} fontSize={{base: "1.3rem", md: "1.6rem"}} bgColor={"#706f6fe8"} alignItems={"flex-start"} backgroundBlendMode={"multiply"} height={"70vh"} position={"center"} bgRepeat={"no-repeat"} bgAttachment={"fixed"} bgSize={"cover"} bgPosition={"center bottom"} p={5}>
          <Heading fontSize={{base: "1.3em", md:"2em"}} color={"brand.400"} fontWeight={400}>Welome to the BeerCommerce App</Heading>
          <Text maxWidth={{base: "null", md: "60%"}} color={"white"} margin={".5em 0 auto"} fontSize={"1.2em"}>A mock e-commerce site I built to practice and showcase the skills I have learnt with React Router v6 and Redux.</Text>
      </VStack>
      <Box px={5} paddingBottom={"2rem"}>
        <Box margin={"1rem 0"}>
          <Heading as={"h2"} color={"brand.300"} fontWeight={500} fontSize={'1.4em'}>Backend</Heading>
          <Text>I have used MongoDB Express and NodeJS, to build the backend.</Text>
        </Box>
        <Box margin={"1rem 0"}>
          <Heading as={"h2"} color={"brand.300"} fontWeight={500} fontSize={'1.4em'}>Frontend</Heading>
          <Text>The frontend UI is built with ChakraUI, the app-wide states are managed by Redux, for the data fetching and sneidng requests I have used the React Router action and loader features.</Text>
          <Text>Users can register add their own products and purchase new products, furthermore it also stores their previous orders</Text>
        </Box>
        <Button bgColor={"brand.300"}><Link to="/">Take a look</Link></Button>
      </Box>
    </Box>
  )
}
