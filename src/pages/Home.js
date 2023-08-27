import React from 'react'
import { useLoaderData, json, useNavigate } from 'react-router-dom'
import ProductGrid from '../components/Products/ProductGrid'
import toggleLoading from '../util/toggleLoading'
import Loading from '../components/Loading'

export const loader = async () => {
  const response = await fetch('http://localhost:8000/products')
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
