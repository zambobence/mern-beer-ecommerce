import React, {useState} from 'react'
import {Text, Input, Button, Heading, Box, ButtonGroup} from '@chakra-ui/react'
import {Form, useActionData, json, redirect, useNavigate, useRouteLoaderData} from 'react-router-dom'
import store from '../../store/store'
import useInput from '../../shared/hooks/use-input'
import InputComponent from '../../shared/components/InputComponent'
import useSelect from '../../shared/hooks/use-select'
import SelectComponent from '../../shared/components/SelectComponent'
export default function ProductFormComponent({method, productData}) {

  const categoryArray = [
    "Beverages",
    "Produce",
    "Snacks",
    "Frozen Foods",
    "Meat and Seafood",
    "Bakery",
    "Dairy Products",
    "Condiments",
  ];

  const data = useRouteLoaderData('product-detail')
  const product = data?.product

  const {
    value: titleValue,
    hasError: titleHasError,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    resetInput: resetTitle
  } = useInput((value) => value.trim()!=="" && value.trim().length > 2, product?.title)

    const {
      value: priceValue,
      hasError: priceHasError,
      inputChangeHandler: priceChangeHandler,
      inputBlurHandler: priceBlurHandler,
      resetInput: resetPrice
    } = useInput((value) => Number(value) > 0, product?.price)

    const {
      value: imageValue,
      hasError: imageHasError,
      inputChangeHandler: imageChangeHandler,
      inputBlurHandler: imageBlurHandler,
      resetInput: resetImage
    } = useInput((value) => value.trim()!=="" && value.trim().length > 2, product?.image)

    const {
      value: descriptionValue,
      hasError: descriptionHasError,
      inputChangeHandler: descriptionChangeHandler,
      inputBlurHandler: descriptionBlurHandler,
      resetInput: resetDescription
    } = useInput((value) => value.trim()!=="" && value.trim().length > 10, product?.description)

    const {
      selectState,
      handleChange,
      hasError: selectHasError
    } = useSelect((value) => value?.trim() !== "", product?.category)

    const navigate = useNavigate()
    const handleCancel = () => {
      if (method === "PATCH"){
        navigate('../../')
      } else {
        navigate('../')
      }
    }

    const productObj = {
      titleValue,
      priceValue,
      imageValue,
      category: selectState.value,
      descriptionValue
    }

    let isButtonDisabled = true
    isButtonDisabled = Object.values(productObj).some(e => e === "")




  return (
    <Box maxWidth={"440px"} marginX={"auto"}>
    {data && data.errors && <ul>{Object.values(data.errors).map(err => <li key={err.path}>{err.msg}</li>)}</ul>}
    {method === "PATCH" ? <Heading>Edit Element</Heading> : <Heading>Add Element</Heading>}
      <Form method={method}>
      <InputComponent value={titleValue} isInvalid={titleHasError} handleChange={titleChangeHandler} handleBlur={titleBlurHandler} label={"Title"} errorMsg="Please provide a valid title" placeholder="Product title" />
      <InputComponent type={'number'} value={priceValue} isInvalid={priceHasError} handleChange={priceChangeHandler} handleBlur={priceBlurHandler} label={"Price"} errorMsg="Price has to be at least 0" placeholder="Product price" />
      <InputComponent value={imageValue} isInvalid={imageHasError} handleChange={imageChangeHandler} handleBlur={imageBlurHandler} label={"Image"} errorMsg="Please provide a valid image url" placeholder="Image Url" />
      <InputComponent value={descriptionValue} isInvalid={descriptionHasError} handleChange={descriptionChangeHandler} handleBlur={descriptionBlurHandler} label={"Description"} errorMsg="Please provide a valid description" placeholder="Product description." />
      <SelectComponent selectState={selectState} label={'Category'} options={categoryArray} onChange={handleChange} value={selectState.value} defaultValue={product?.category} isInvalid={selectHasError} errorMsg={'Please select a valid category!'} />
    <ButtonGroup marginY={"1rem"}>
      <Button type="submit" colorScheme='brand' isDisabled={isButtonDisabled}>
        {method === "PATCH" ? "Save" : "Add product"}
      </Button>
      <Button onClick={handleCancel} bgColor="red.100">
        Cancel
      </Button>
    </ButtonGroup>
    </Form>
    </Box>
  )
}


export const action = async ({request, params}) => {
    const authStore = store.getState()?.auth
    const method = request.method
    const data = await request.formData()
    console.log(data)
    const productData = {
      title: data.get('title'),
      description: data.get('description'),
      category: data.get('category'),
      price: Number(data.get('price')),
      image: data.get('image')
    }

    let url = `${process.env.REACT_APP_BACKEND_URL}/add-product`

    if (request.method === "PATCH"){
      const productId = params.productId
      url = `${process.env.REACT_APP_BACKEND_URL}/product/${productId}`
    }

    console.log(method)
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.token}`
      },
      body: JSON.stringify(productData)
    })

    if (response.status === 422){
      return response
    }

    if (!response.ok){
      throw json({message: 'Could not update product'}, {status: 500})
    }
    const responseData = await response.json()
    console.log(responseData)
    return redirect('../products')
  }