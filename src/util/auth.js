import store from '../store/store'
import { redirect } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export const checkAuth = () => {
    const {isLoggedIn} = store.getState()?.auth
    console.log('Auth: ', isLoggedIn)
    if (isLoggedIn){
        return null
    }
    return redirect('/auth')
}