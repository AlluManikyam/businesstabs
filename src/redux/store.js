import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';

import thunk from 'redux-thunk'

//Link reducers of all modules here.
import { fpms_reducer } from './redux_fms'


let reducers=combineReducers({
  fpms_reducer
})

export default createStore(
  reducers,
    applyMiddleware(thunk)
)
