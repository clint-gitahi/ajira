import axios from "axios";
import * as actionTypes from "./actionTypes";

// fetch employees Api call
export function getEmployees() {
  return (dispatch, getState) => {
    const { app } = getState();
    return axios.get(
      "https://data.montgomerycountymd.gov/api/views/54rh-89p8/rows.json?accessType=DOWNLOAD"
    );
  };
}

// when the api call is successful
export function getEmployeesSuccess(data) {
  console.log("data", data);
  return {
    type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: data
  };
}

// when the api fails
export function getEmployeeFail(error) {
  return {
    type: actionTypes.FETCH_EMPLOYEES_FAIL,
    payload: error
  };
}
