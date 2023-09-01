import { Heading, Box, Text, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '../../store/auth/authSlice'
import { Form, Navigate, useNavigate } from 'react-router-dom'

export default function ProfileDetails({user}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(authSliceActions.logout())
        navigate('/auth?mode=login')
    }
    

  return (
    <Box fontSize={'1.2rem'}>
        <Heading as={"h5"} fontSize={'1.2em'} margin={"1rem 0"}>
            User ID: 
            <Text marginLeft={".2em"} as={"span"} color={"black"} fontWeight={400}>
                {user._id}
            </Text>
        </Heading>
        <Heading as={"h5"} fontSize={'1.2em'}>
            Email: 
            <Text as={"span"} marginLeft={".2em"} color={"black"} fontWeight={400}>
                {user.email}
            </Text>
        </Heading>
        <ButtonGroup marginY={"1.5rem"}>
            <Form method="DELETE">
                <Button type={"submit"} bgColor={"brand.200"}>Delete profile</Button>
            </Form>
            <Button onClick={handleLogout}>Logout</Button>
        </ButtonGroup>
    </Box>
  )
}
