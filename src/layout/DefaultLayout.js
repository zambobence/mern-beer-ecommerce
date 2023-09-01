import React, { useEffect } from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import AlertComponent from '../components/AlertUI/AlertComponent'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import CartModal from '../components/Cart/CartModal'
import { useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'
import { uiSliceActions } from '../store/ui/uiSlice'
import Footer from '../components/Footer/Footer'
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
    <Grid templateColumns={'repeat(6, 1fr)'} minH={"100vh"}>
        <GridItem colSpan={'6'}>
            <NavBar />
        </GridItem>

        <GridItem colSpan={'6'}>
          <Outlet />
        </GridItem>
        <GridItem colSpan={'6'}>
          <Footer />
        </GridItem>
    </Grid>
    </>)
}

export default DefaultLayout
