import {initialState} from './initialState';
import {
	BUSINESS_CASE_DATA,
	MANAGE_BUSINESS_CASE_DATA
  } from "./actions/types";


export  const fpms_reducer=(state = initialState, action) => {
switch (action.type) {
	case BUSINESS_CASE_DATA:
		return {
		  ...state,
		  isLoading: false,
		  errMess: "",
		  businessCaseData: action.payload
		};
	case MANAGE_BUSINESS_CASE_DATA:
	return {
		...state,
		isLoading: false,
		errMess: "",
		manageBusinessCaseData: action.payload
	};
 default:
   return state
}
}
