import React from 'react'
import ProductFormComponent from '../components/Products/ProductFormComponent'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

export default function AddProduct() {
  return (
    <div>AddProduct
        <ProductFormComponent method={"POST"} />
    </div>
  )
}