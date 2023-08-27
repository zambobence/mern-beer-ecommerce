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
import { cartSliceActions } from '../../store/cart/cartSlice'

function BasicUsage() {
    const dispatch = useDispatch()
    const {cartShown} = useSelector((state) => state.ui)

    const handleCloseCart = () => {
        dispatch(uiSliceActions.toggleCart())
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
              <Button colorScheme='blue' mr={3} onClick={handleCloseCart}>
                Checkout
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage