import {initialState} from './initialState';
import {
	BUSINESS_CASE_DATA,
	MANAGE_BUSINESS_CASE_DATA,
	MANAGE_SELECTED_EMPLOYEES
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
	case MANAGE_SELECTED_EMPLOYEES:
	return {
		...state,
		isLoading: false,
		errMess: "",
		selectedEmployees: action.payload
	};
 default:
   return state
}
}
