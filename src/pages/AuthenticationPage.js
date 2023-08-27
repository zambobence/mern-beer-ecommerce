import React from 'react'
import {json, redirect} from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import store from '../store/store'
import { authSliceActions } from '../store/auth/authSlice'

export default function AuthenticationPage() {
  return (
    <div>
        <AuthForm />
    </div>
  )
}

export const action = async ({request, params}) => {
    console.log('Within action')
    // we wanto to get hold of the form data
    // the input data has to have their names
    const data = await request.formData()
    const formData = {
        email: data.get('email'),
        password: data.get('password')
    }

    console.log(formData)
    // With default browser features we access the search parameters
    
    const searchParams = new URL(request.url).searchParams
    console.log(searchParams)
    let mode = searchParams.get('mode') || 'login'

    console.log(mode)

    const url = 'http://localhost:8000/' + mode 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    console.log(response)
    if (response.status === 422){
        return response
    }

    if (response.status === 401) {
        return response
    }

    if (!response.ok){
        throw json({message: 'Could not authenticate user!'}, {status: 500})
    }
    store.dispatch(authSliceActions.login())
    return redirect ('/welcome')
}
