import React from 'react'
import randomNumber from '../../util/randomNumber'
import {Box, Image} from '@chakra-ui/react'

export default function ProductImage(props) {
  const beerGradient = "linear-gradient(to top,  #e4af27 0%,  #e2b954 30%,  #e1c379 50%,  #dfcc9d 70%,  #dcd4c0 100%)";

  let imageUrl
  if (!props.src.startsWith('https://') || !props.src || props.src.trim() === ""){
    imageUrl = `http://source.unsplash.com/random/?${props.src}/${randomNumber(1, 200)}`
  } else {
    imageUrl = props.src
  }

  return (
    <Box backgroundImage={beerGradient}>
        <Image
            src={imageUrl}
            alt={props.alt}
            objectFit={"cover"}
            aspectRatio={"1"}
            maxHeight={props.maxHeight || "450px"}
            maxWidth={props.maxWidth}
            borderRadius={props.borderRadius}
        />
    </Box>
  )
}
