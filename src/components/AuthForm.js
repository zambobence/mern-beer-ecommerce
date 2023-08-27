import React, {useState} from 'react'
import {Form, useSearchParams, Link, useActionData} from 'react-router-dom'
import {Button, Input, InputGroup, InputRightElement, Box, Heading, VStack} from '@chakra-ui/react'

export default function AuthForm() {

    const data = useActionData()
    const [searchParams] = useSearchParams()
    const isLogin = searchParams.get('mode') === 'login'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)


  return (
    <Box>
        <Heading textAlign={"center"}>{isLogin ? "Login" : "Register"}</Heading>
        {data && data.errors && <ul><p>{data.message}</p>{Object.values(data.errors).map(err => <li key={err.path}>{err.msg}</li>)}</ul>}
        <Form method="POST" style={{maxWidth: "300px", margin: "2rem auto"}}>
        <VStack spacing={2}>
        <Input 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email' 
            />
            <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
            <Button type="submit" bgColor="#e99002">Save</Button>
            <Button>
                <Link to={`?mode=${isLogin ? "register" : "login"}`}>Switch to {isLogin ? "register" : "login"}</Link>
            </Button>

            </VStack>
        </Form>

    </Box>
  )
}
