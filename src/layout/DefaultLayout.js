import React, { useEffect } from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import { useSelector, useDispatch } from 'react-redux'
import AlertComponent from '../components/AlertUI/AlertComponent'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import CartModal from '../components/Cart/CartModal'
import { fetchCart } from '../store/cart/cartSlice'
import { useNavigation } from 'react-router-dom'
import LoadingAnimation from '../components/Loading'
import Loading from '../components/Loading'
import { uiSliceActions } from '../store/ui/uiSlice'
const DefaultLayout = () => {

    const navigation = useNavigation()
    const {notification} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    useEffect(() => {
      const removeAlert = () => {
        setTimeout(()=> {
          dispatch(uiSliceActions.hideNotification())
        }, 2000)
      }

      removeAlert()
    },[])

    return (
    <>
    {notification.visible && <AlertComponent />}
    {navigation.state !== "idle" && <Loading />}
    <CartModal />
    <Grid templateColumns={'repeat(6, 1fr)'}>
        <GridItem colSpan={'6'}>
            <NavBar />
        </GridItem>

        <GridItem colSpan={{base: '6', md: '6'}}>
            <Box px={5}>
                <Outlet />
            </Box>
        </GridItem>
    </Grid>
    </>)
}

export default DefaultLayout
