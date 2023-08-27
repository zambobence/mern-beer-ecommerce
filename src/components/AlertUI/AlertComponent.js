import React from 'react'
import { useSelector } from 'react-redux'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const AlertComponent = () => {
    const {notification} = useSelector((state) => state.ui)
    return (
        <Alert status={notification.status || "error"}>
            <AlertIcon />
            <AlertTitle>{notification?.notiTitle}</AlertTitle>
            <AlertDescription>{notification?.notiDetails}</AlertDescription>
        </Alert>
    )
}

export default AlertComponent

