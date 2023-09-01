'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import CartIcon from './Cart/CartIcon'
import { useSelector, useDispatch } from 'react-redux'
import Logo from './Logo'
import { authSliceActions } from '../store/auth/authSlice'


const NavLinkComponent = (props) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      <NavLink to={props.to}>
        {props.children}
      </NavLink>
    </Box>
  )
}

const LogoutBtn = (props) => {
  return (  
    <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        <Button onClick={props.onClick}>
          Logout
        </Button>
      </Box>
  )
}

export default function NavBar() {

  const auth = useSelector((state) => state.auth)
  const isLoggedIn = auth.isLoggedIn
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(authSliceActions.logout())
    navigate('/auth?mode=login')
  }

  let Links
  if (auth.isLoggedIn){
    Links = [{label: 'Home', target: '/'}, {label: 'Products', target: '/products'}, {label: 'Profile', target: '/profile'}, {label: 'Add product', target: '/add-product'}]
  } else {
    Links = [{label: 'Home', target: '/'}, {label: 'Products', target: '/products'}, {label: 'Authentication', target: '/auth?mode=login'}]
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to="/">
                <Logo/>
              </Link>
              </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} onClick={onClose}>
              {Links.map((link) => (
                <NavLinkComponent key={link.label} to={link.target}>{link.label}</NavLinkComponent>
              ))}
              {isLoggedIn && <LogoutBtn onClick={handleLogout} />}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
            {auth.isLoggedIn ? <CartIcon /> : null}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLinkComponent key={link.label} to={link.target} >{link.label}</NavLinkComponent>
              ))}
              {isLoggedIn && <LogoutBtn onClick={handleLogout} />}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}