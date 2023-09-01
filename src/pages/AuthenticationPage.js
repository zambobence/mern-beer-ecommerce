import React from 'react'
import {json, redirect} from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import store from '../store/store'
import { authSliceActions } from '../store/auth/authSlice'
import Container from './Container'

export default function AuthenticationPage() {
  return (
    <Container px={"5"}>
        <AuthForm />
    </Container>
  )
}

export const action = async ({request, params}) => {
    // we wanto to get hold of the form data
    // the input data has to have their names
    const data = await request.formData()
    const formData = {
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('confirmPassword')
    }
    
    // With default browser features we access the search parameters

    const searchParams = new URL(request.url).searchParams
    let mode = searchParams.get('mode') || 'login'

    const url = `${process.env.REACT_APP_BACKEND_URL}/${mode}`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    if (response.status === 422){
        return response
    }

    if (response.status === 401) {
        return response
    }

    if(response.status === 404){
        return response
    }

    if (!response.ok){
        throw json({message: 'Could not authenticate user!'}, {status: 500})
    }
    const responseData = await response.json()
    store.dispatch(authSliceActions.login(
        {
            token: responseData?.user.token,
            uid: responseData?.user.uid
        }
    ))
    return redirect ('..')
}
