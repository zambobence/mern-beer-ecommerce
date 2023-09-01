import { HStack, Icon, Text } from '@chakra-ui/react'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import React from 'react'

export default function AddFavourite({isFavourite}) {
  return (
    <HStack fontSize={"1.3rem"}>
       {isFavourite ?
       (
        <>
            <Icon as={AiFillHeart} />
            <Text>In favourites</Text>
        </>
        ) : (
        <>
            <Icon as={AiOutlineHeart} />
            <Text>Add to favourites</Text>
        </>
       )}
    </HStack>
  )
}
