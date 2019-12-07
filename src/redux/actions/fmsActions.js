import {
  BUSINESS_CASE_DATA,
  MANAGE_BUSINESS_CASE_DATA
} from "./types";


export const addBusinessCaseData = data => {
  return {
    type: BUSINESS_CASE_DATA,
    payload: data
  };
};

export const addManageBusinessCaseData = data => {
  return {
    type: MANAGE_BUSINESS_CASE_DATA,
    payload: data
  };
};


export const storeBusinessCaseData = data => dispatch => {
    dispatch(addBusinessCaseData(data));
}

export const storeManageBusinessCaseData = data => dispatch => {
  dispatch(addManageBusinessCaseData(data));
}




