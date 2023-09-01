import React from 'react'
import { Heading, Grid, GridItem, Box, Text, Image } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import notFoundImg from '../assets/not_found.png'
import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
    const errorObject = useRouteError()
    let title = "Error";
    let message = "Something went wrong we could not retrieve the source you requested."

    if (errorObject.status === 404){
        title = "Not Found";
        message = errorObject.msg || message
    }

    if (errorObject.status === 500){
        title = "Internal Server Error"
    }
  return (
    <Grid
        templateColumns={'repeat(6, 1fr)'}
        backgroundImage={notFoundImg}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}>
        <GridItem colSpan={'6'}>
            <NavBar />
        </GridItem>

        <GridItem colSpan={"6"} minH={"70vh"}>
            <Box px={4} fontSize={'1.2rem'}>
                <Heading as={"h2"} fontSize={"1.4em"} margin={"1em 0"}>
                {title}
                </Heading>
                <Text fontSize={"1.2em"}>
                {message}
                </Text>
            </Box>
        </GridItem>
    </Grid>
  )
}
