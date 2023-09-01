import React from 'react'
import ProductFormComponent from '../components/Products/ProductFormComponent'

export default function AddProduct() {
  return (
    <ProductFormComponent method={"POST"} />
  )
}