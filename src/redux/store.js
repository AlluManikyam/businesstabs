import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';

import thunk from 'redux-thunk'

//Link reducers of all modules here.
import { user_reducer } from './redux_ctc'


let reducers=combineReducers({
    user_reducer
})

export default createStore(
  reducers,
//   composeWithDevTools(
    applyMiddleware(thunk)
//   )
)
