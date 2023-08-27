import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
    const errorObject = useRouteError()
    let title = "Error";
    let message = "Something went wrong"

    if (errorObject.status === 404){
        title = "Not Found";
        message = errorObject.data.message
    }

    if (errorObject.status === 500){
        title = "Internal Server Error"
    }
  return (
    <div>
        <h1>{title}</h1>
        <h2>
            {message}
        </h2>
    </div>
  )
}
