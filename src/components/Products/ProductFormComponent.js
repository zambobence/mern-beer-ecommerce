import React, {useState} from 'react'
import {Text, Input, Button, Heading} from '@chakra-ui/react'
import {Form, useActionData, json, redirect, useNavigate} from 'react-router-dom'
export default function ProductFormComponent({method, productData}) {

  const data = useActionData()

    const [title, setTitle] = useState(productData ? productData?.title : "")
    const [price, setPrice] = useState(productData ? productData.price : "")
    const [description, setDescription] = useState(productData ? productData?.description : "")
    const [image, setImage] = useState(productData ? productData?.title : "")

    const navigate = useNavigate()

    const handleCancel = () => {
        if (method === "PATCH"){
            navigate('../../')
        } else {
            navigate('../')
        }
    }

  return (
    <div>EditFormComponent
    {data && data.errors && <ul>{Object.values(data.errors).map(err => <li key={err.path}>{err.msg}</li>)}</ul>}
    {method === "PATCH" ? <Heading>Edit Element</Heading> : <Heading>Add Element</Heading>}

      <Form method={method} >
      <Text mb='8px'>Title:</Text>
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Please provide a title'
        size='sm'
      />
      <Text mb='8px'>Price:</Text>
      <Input
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Please provide a title'
        size='sm'
      />
      <Text mb='8px'>Image:</Text>
      <Input
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder='Please provide a title'
        size='sm'
      />
      <Text mb='8px'>Description:</Text>
      <Input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Please provide a title'
        size='sm'
      />
        <Button type="submit">
            {method === "PATCH" ? "Save" : "Add product"}
        </Button>
        <Button onClick={handleCancel}>
            Cancel
        </Button>
    </Form>
    </div>
  )
}


export const action = async ({request, params}) => {
    const method = request.method
    const data = await request.formData()
    console.log(data)
    const productData = {
      title: data.get('title'),
      description: data.get('description'),
      price: Number(data.get('price')),
      image: data.get('image')
    }

    let url = "http://localhost:8000/product/add-item"

    if (request.method === "PATCH"){
      console.log(method, "We are editing")
      const productId = params.productId
      url = 'http://localhost:8000/product/' + productId
      productData.id = productId
    } else {
      console.log(method, "We are adding")
      productData.id = Math.random().toString()
    }
  
    console.log(productData)
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    console.log(response)
  
    if (response.status === 422){
      return response
    }
  
    if (!response.ok){
      throw json({message: 'Could not update product'}, {status: 500})
    }
    const responseData = await response.json()
    console.log(responseData)
    return redirect('..')
  }