import React from 'react'
import { useLoaderData, json, useNavigate } from 'react-router-dom'
import ProductGrid from '../components/Products/ProductGrid'

export const loader = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`)
  if (!response.ok){
      throw json(
      {message: "Could not fetch products"},
      {status: 404}
    )
  } else {
    return response
  }
}

export default function Home() {

  const data = useLoaderData()
  const products = data.products

  return (
    <>
      <ProductGrid products={products} />
    </>
  )
}
