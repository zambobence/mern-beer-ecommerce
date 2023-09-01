import React from 'react'
import {Button} from '@chakra-ui/react'
import {Link, json, redirect, useRouteLoaderData, useSubmit } from 'react-router-dom'
import ProductDetailsComponent from '../components/Products/ProductDetailsComponent'
import { useSelector } from 'react-redux'

export default function ProductDetailsPage() {
  let uid
  let isAuthor
  const auth = useSelector((state) => state.auth)
  uid = auth?.uid

  const data = useRouteLoaderData('product-detail')
  const product = data?.product

  isAuthor = product?.author.toString() === uid?.toString()

  // we can submit programatically
  const submit = useSubmit()

  const handleDelete = () => {
    const proceed = window.confirm('Are you sure?')
    if (proceed){
      return submit(null, {method: 'delete'})
    }
  }

  return (
      <>
        <ProductDetailsComponent product={product}/>
        {isAuthor && 
      ( <>
      <Button>
        <Link to={`edit`}>Edit</Link>
      </Button>
      <Button onClick={handleDelete}>Delete</Button>
      </> )
        }
      </>
  )
}

export const loader = async ({request, params}) => {
  const productId = params.productId
  const url = `${process.env.REACT_APP_BACKEND_URL}/product/${productId}`
  const response = await fetch(url)
    if (!response.ok){
      throw json({message: 'Could not fetch product data!'},{status: 404})
    }
  console.log(response)
  return response
}

export const action = async ({request, params}) => {
  const productId = params.productId
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/product/${productId}`, {
  // we can also get the request method from the request object passed into 
  // the action
    method: 'DELETE'
  })
  if (!response.ok){
    throw json({message: 'Could not delete product'}, {status: 500})
  }
  const responseData = await response.json()
  return redirect('../')
}