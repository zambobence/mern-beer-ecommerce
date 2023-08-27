import React from 'react'
import { ListIcon, ListItem, VStack, List, Avatar } from '@chakra-ui/react'
export default function SideBar() {
  return (
    <VStack as={"aside"} minHeight="100vh" bgColor={"pink"}>
        <Avatar size='xl' name='Dan Abrahmov' src='https://source-unsplash.com/random/400x400/?profile' />
        <List>
            <ListItem>
                <a href='/profile'>
                    Profile
                </a>
            </ListItem>
            <ListItem>
                <a href='/orders'>
                    Profile
                </a>
            </ListItem>
            <ListItem>
                <a href='/'>
                    Profile
                </a>
            </ListItem>
        </List>
    </VStack>
  )
}
