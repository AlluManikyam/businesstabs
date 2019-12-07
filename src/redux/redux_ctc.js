import {initialState} from './initialState';
import {
	CTC_USER_REQUEST,
	CTC_USER_SUCCESS,
	CTC_USER_FAILED
  } from "../redux/actions/types";


export  const user_reducer=(state = initialState, action) => {
switch (action.type) {
	case CTC_USER_SUCCESS:
		return {
		  ...state,
		  isLoading: false,
		  errMess: "",
		  indoorData: action.payload
		};
	  case CTC_USER_REQUEST:
		return { ...state, isLoading: true,indoorData:{} };
	  case CTC_USER_FAILED:
		return { ...state, isLoading: false, errMess: action.payload,indoorData:{} };
 default:
   return state
}
}
