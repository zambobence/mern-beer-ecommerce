import { Button, Divider, Flex, HStack, Heading, VStack, Grid, GridItem, Box } from '@chakra-ui/react'
import CartItem from '../components/Cart/CartItem'
import { useSelector } from 'react-redux'
import React from 'react'
import CartTotalComponent from '../components/Cart/CartTotalComponent'
import SelectComponent from '../shared/components/SelectComponent'
import useSelect from '../shared/hooks/use-select'
import useInput from '../shared/hooks/use-input'
import InputComponent from '../shared/components/InputComponent'
import store from '../store/store'
import { Form, json, redirect } from 'react-router-dom'
import { cartSliceActions } from '../store/cart/cartSlice'
import { uiSliceActions } from '../store/ui/uiSlice'

export default function CheckoutPage() {
  const paymentOptions = ['Credit card', 'Cash payment']

  const {
    selectState,
    handleChange,
    hasError: selectHasError
  } = useSelect((value) => value?.trim() !== "")

  const {
    value: streetAddressValue,
    hasError: streetAddressHasError,
    inputChangeHandler: streetAddressChangeHandler,
    inputBlurHandler: streetAddressBlurHandler,
    resetInput: resetStreetAddress
  } = useInput((value) => value.trim()!=="" && value.trim())

  const {
    value: postalCodeValue,
    hasError: postalCodeHasError,
    inputChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    resetInput: resetPostalCode
  } = useInput((value) => value.trim()!=="")
  const {
    value: cityValue,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    resetInput: resetCity
  } = useInput((value) => value.trim()!=="")


  const {cart, auth} = useSelector((state) => state)
  const cartItems = cart.items.map( e => <CartItem key={e.id} item={e} />)

  const totalAmount = cart.totalAmount
  const productList = cart.items
  const date = new Date()

  const deliveryAddress = {
    streetAddress: streetAddressValue,
    postalCode: postalCodeValue,
    city: cityValue
  };

  const orderData = {
    paymentMethod: selectState.value,
    deliveryAddress,
    productList,
    totalAmount,
    date
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:8000/checkout', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
      },
      body: JSON.stringify(orderData)
    })
    console.log(response)
    const responseData = await response.json()
    console.log(responseData)
  }

  return (
    <Grid templateColumns={"repeat(12, 1fr)"} columnGap={{base: ".5rem", md: "4rem"}}>
        <GridItem colSpan={"12"}>
          <Heading as={"h2"} margin={".5em 0"}>Checkout details</Heading>
        </GridItem>
        <GridItem colSpan={{base: "12", md:"5"}}>
          {cartItems}
          <Divider />
          <CartTotalComponent />
        </GridItem>
        <GridItem colSpan={{base: "12", md:"7"}}>
        <Form method="POST">
          <SelectComponent selectState={selectState} label={'Payment method'} name={"paymentMethod"} options={paymentOptions} onChange={handleChange} value={selectState.value} isInvalid={selectHasError} errorMsg={'Please select a payment method!'} name={"paymentMethod"} />
          <Heading as={"h4"} fontWeight={500} fontSize={"2.2rem"} margin={".5em 0 .2EM"}>Delivery Address</Heading>
          <InputComponent margin={".25em 0"} value={streetAddressValue} isInvalid={streetAddressHasError} handleChange={streetAddressChangeHandler} handleBlur={streetAddressBlurHandler} label={"Street Address"} name={"streetAddress"} errorMsg="Please pvoide a valid street address" placeholder="1 Main Street" />
          <InputComponent margin={".25em 0"} value={postalCodeValue} isInvalid={postalCodeHasError} handleChange={postalCodeChangeHandler} handleBlur={postalCodeBlurHandler} label={"Postal Code"} name={"postalCode"}errorMsg="Please provide a postal code" placeholder="1111" />
          <InputComponent margin={".25em 0"} value={cityValue} isInvalid={cityHasError} handleChange={cityChangeHandler} handleBlur={cityBlurHandler} label={"City"} errorMsg="Please provide a validity city" placeholder="London" />
          <Button type="submit" margin={"1rem 0"}>Checkout</Button>
        </Form>
      </GridItem>
    </Grid>
  )
}

export const action = async ({request, params}) => {
  const {auth, cart} = store.getState()
  console.log(auth)
  console.log("Within action")
  const data = await request.formData()

  const paymentMethod = data.get('paymentMethod')
  const deliveryAddress = {
    streetAddress: data.get('streetAddress'),
    postalCode: data.get('postalCode'),
    city: data.get('city')
  };

  const orderData = {
    paymentMethod,
    deliveryAddress,
    productList: cart.items,
    totalAmount: cart.totalAmount,
    date: new Date()
  }

  const response = await fetch('http://localhost:8000/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
    body: JSON.stringify(orderData)
  })
  console.log(response)
  if (!response.ok){
    return response
  }

  const responseData = await response.json()
  console.log(responseData)
  store.dispatch(cartSliceActions.emptyCart)
  store.dispatch(uiSliceActions.setNotification({
    status: "success",
    notiTitle: "Successfully added order",
    notiDetails: "We have succesfully added your order!",
    visible: true
  }))
  return redirect('..')
}