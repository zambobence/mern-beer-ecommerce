import React from 'react'
import { Box, Icon, Link } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import './SocialsBoX.css'
export default function SocialsBox() {
  return (
    <Box color={"brand.300"}>
        <Link px={5} href="https://www.linkedin.com/in/bence-zambo-4b3b76153/" target='_blank' alt="linkedin" rel="noreferrer"><Icon color={"brand.300"} as={AiFillLinkedin} /></Link>
        <Link px={5} href="https://github.com/zambobence" target='_blank'alt="github" rel="noreferrer"><Icon as={AiFillGithub} /></Link>
        <Link px={5} href="http://zambobence.dev" alt="portfolio"><Icon as={BiWorld} /></Link>
    </Box>
  )
}
