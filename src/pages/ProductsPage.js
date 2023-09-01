import React from 'react'
import { useLoaderData, json, useNavigate } from 'react-router-dom'
import ProductGrid from '../components/Products/ProductGrid'
import Container from './Container'

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

export default function ProductsPage() {

  const data = useLoaderData()
  const products = data.products

  return (
    <Container px={5}>
      <ProductGrid products={products} />
    </Container>
  )
}
