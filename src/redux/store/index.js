import {createStore} from 'redux'
import mainReducer from '../reducers/index.js'

export const initialState = {
    count : 0
}

const configureStore = createStore(
    mainReducer,
    initialState,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default configureStore