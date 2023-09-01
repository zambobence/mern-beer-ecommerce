import React from 'react'
import { json, useLoaderData, redirect, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import store from '../store/store'
import ProfileComponent from '../components/Profile/ProfileComponent'
import useNotification from '../shared/hooks/use-notification'
import { uiSliceActions } from '../store/ui/uiSlice'
import { authSliceActions } from '../store/auth/authSlice'
export default function ProfilePage() {

    const data = useLoaderData()
    const user = data?.user

  return (
    <ProfileComponent user={user} />
  )
}

export const loader = async () => {
  const authStore = store.getState()?.auth

  if (authStore.uid){
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${authStore.uid}`,{
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    if (!response.ok){
      console.log(response)
        return response
    }
      return response
    } else {
      return redirect ('/auth')
    }
}

export const action = async ({request, params}) => {
  const authStore = store.getState()?.auth
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${authStore.uid}`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${authStore.token}`
      }
  })
  if (!response.ok){
    console.log(response)
    return response
  } else {
    store.dispatch(uiSliceActions.setNotification({
      status: "success",
      notiTitle: "Success",
      notiDetails: "We have succesfully deleted your profile",
      visible: true
    }))
    store.dispatch(authSliceActions.logout())
    return redirect('..')
  }
}
