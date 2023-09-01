import { useDispatch, useSelector } from 'react-redux'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Divider
  } from '@chakra-ui/react'
import CartItem from '../Cart/CartItem'
import { uiSliceActions } from '../../store/ui/uiSlice'
import CartTotalComponent from './CartTotalComponent'
import { useNavigate } from 'react-router-dom'

function BasicUsage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {cartShown} = useSelector((state) => state.ui)

  const handleCloseCart = () => {
    dispatch(uiSliceActions.toggleCart())
  }

  const handleCheckout = () => {
    dispatch(uiSliceActions.toggleCart())
    navigate('/checkout')
  }

    const cart = useSelector((state) => state.cart)
    const cartItems = cart.items.map( e => <CartItem key={e.id} item={e} />)

    return (
      <>
        <Modal isOpen={cartShown} onClose={handleCloseCart}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {cartItems}
                <Divider />
                <CartTotalComponent />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCheckout}>
                Checkout
              </Button>
              <Button variant='ghost' onClick={handleCloseCart}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage