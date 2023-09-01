import React from 'react'
import ProductFormComponent from '../components/Products/ProductFormComponent'
import Container from './Container'

export default function AddProduct() {
  return (
    <Container px={"5"}>
      <ProductFormComponent method={"POST"} />
    </Container>
  )
}