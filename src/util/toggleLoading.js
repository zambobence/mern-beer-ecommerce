import store from '../store/store'
import { uiSliceActions } from '../store/ui/uiSlice'

const toggleLoading = () => {
    store.dispatch(uiSliceActions.toggleLoading())
}

export default toggleLoading