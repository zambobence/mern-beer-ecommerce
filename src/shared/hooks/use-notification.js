import React from 'react'
import { uiSliceActions } from '../../store/ui/uiSlice'
import { useDispatch } from 'react-redux'
export default function useNotification() {
    const dispatch = useDispatch()

    const sendNotification = (status, notiTitle, notiDetails, visible, disappearing = null, timeOut = 1500) => {
        dispatch(uiSliceActions.setNotification({
            status,
            notiTitle,
            notiDetails,
            visible
        }))
        if (disappearing){
            setTimeout(() => {
                dispatch(uiSliceActions.hideNotification())
            }, timeOut)
        }
    }
    return {sendNotification}
}
