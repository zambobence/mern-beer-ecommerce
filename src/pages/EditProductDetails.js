import React from 'react'
import { useRouteLoaderData} from 'react-router-dom'
import ProductFormComponent from '../components/Products/ProductFormComponent'

export default function EditProductDetails() {

    const data = useRouteLoaderData('product-detail')
    const productData = data.product
  return (
    <div>
        <ProductFormComponent method={"PATCH"} productData={productData} />
    </div>
  )
}

