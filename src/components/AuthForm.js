import React, {useState} from 'react'
import {Form, useSearchParams, Link, useActionData} from 'react-router-dom'
import {Button, Input, InputGroup, InputRightElement, Box, Heading, VStack, ButtonGroup} from '@chakra-ui/react'
import useInput from '../shared/hooks/use-input'
import InputComponent from '../shared/components/InputComponent'
import ErrorComponent from '../shared/components/ErrorComponent'

export default function AuthForm() {

    const data = useActionData()
    const [searchParams] = useSearchParams()
    const isLogin = searchParams.get('mode') === 'login'

    const {
        value: emailValue,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail
      } = useInput((value) => value.trim()!== "" && value.includes("@"))
  
    const {
        value: passwordValue,
        hasError: passwordHasError,
        inputChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetInput: resetPassword
      } = useInput((value) => value.trim()!== "" && value.trim().length > 4)
  
    const {
        value: confirmPasswordValue,
        hasError: confirmPasswordHasError,
        inputChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        resetInput: resetConrtirmPassword
      } = useInput((value) => value.trim()!== "" && value.trim().length > 4)
  


  return (
    <Box maxWidth={"440px"} marginX={"auto"}>
        <Heading textAlign={"center"}>{isLogin ? "Login" : "Register"}</Heading>

        {data && data.errors &&  <ErrorComponent data={data} /> }
        <Form method="POST" style={{margin: "2rem auto"}}>
            <InputComponent name={'email'} value={emailValue} isInvalid={emailHasError} handleChange={emailChangeHandler} handleBlur={emailBlurHandler} label={"Email"} errorMsg="Please provide a valid email" placeholder="email" />
            <InputComponent name={'password'} value={passwordValue} isInvalid={passwordHasError} handleChange={passwordChangeHandler} handleBlur={passwordBlurHandler} label={"Password"} type={"password"} errorMsg={"A valid password should be at least 4 characters long."} placeholder="password" />
            {!isLogin && (
                <InputComponent name={'confirmPassword'} value={confirmPasswordValue} isInvalid={confirmPasswordHasError} handleChange={confirmPasswordChangeHandler} handleBlur={confirmPasswordBlurHandler} label={"Confirm password"} type={"password"} errorMsg={"A valid password should be at least 4 characters long."} placeholder="password" />
            )}
            <ButtonGroup size='md' margin={"2rem 0"}>
                <Button type="submit" bgColor="brand.200">
                    Save
                </Button>
                <Button>
                    <Link to={`?mode=${isLogin ? "register" : "login"}`}>Switch to {isLogin ? "register" : "login"}</Link>
                </Button>
            </ButtonGroup>
        </Form>
    </Box>
  )
}
