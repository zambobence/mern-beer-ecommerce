import React from 'react'
import {Button} from '@chakra-ui/react'
import {Link, json, redirect, useRouteLoaderData, useSubmit } from 'react-router-dom'
import ProductDetailsComponent from '../components/Products/ProductDetailsComponent'

export default function ProductDetailsPage() {
    const data = useRouteLoaderData('product-detail')
    const product = data?.product

    // we can submit programatically
    const submit = useSubmit()

    const handleDelete = () => {
      const proceed = window.confirm('Are you sure?')
      if (proceed){
        console.log('proceeding')
        return submit(null, {method: 'delete'})
      }
      console.log('Not proceeding')

    }

  return (
    <div>ProductDetails
        <p>ProductId: {product.id}</p>
        <ProductDetailsComponent product={product}/>
        <Button>
          <Link to={`edit`}>Edit</Link>
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
    </div>
  )
}

export const loader = async ({request, params}) => {
  const productId = params.productId
  console.log(productId)
  const url = 'http://localhost:8000/product/' + productId
  console.log(url)
  const response = await fetch(url)
    if (!response.ok){
      console.log(response)
      throw json({message: 'Could not fetch product data!'},{status: 404})
    }
  return response
}

export const action = async ({request, params}) => {
  const productId = params.productId
  const response = await fetch('http://localhost:8000/product/' + productId, {
  // we can also get the request method from the request object passed into 
  // the action
    method: 'DELETE'
  })
  console.log(response)
  if (!response.ok){
    throw json({message: 'Could not delete product'}, {status: 500})
  }
  const responseData = await response.json()
  console.log(responseData)
  return redirect('../')
}