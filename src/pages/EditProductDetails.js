import React from 'react'
import { useRouteLoaderData} from 'react-router-dom'
import ProductFormComponent from '../components/Products/ProductFormComponent'
import Container from './Container'

export default function EditProductDetails() {

    const data = useRouteLoaderData('product-detail')
    const productData = data.product
  return (
    <Container px={5}>
        <ProductFormComponent method={"PATCH"} productData={productData} />
    </Container>
  )
}

