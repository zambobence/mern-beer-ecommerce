import React from 'react'
import beerImg1 from '../assets/beer1.png'
import beerImg2 from '../assets/beer2.png'
import beerImg3 from '../assets/beer3.png'
import beerImg4 from '../assets/beer4.png'
import './Loading.css'
import { Heading } from '@chakra-ui/react'

export default function Loading () {
  return (
    <div className='loading-component'>
        <div className='loading-animation-container'>
            <img className="loading-img" src={beerImg1} alt="loading-animation" />
            <Heading as={"h2"}color={"beet"}>Loading</Heading>
        </div>
    </div>
  )
}
