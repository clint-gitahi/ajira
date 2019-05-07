import * as actionTypes from "../actions/actionTypes";

const initialState = {
  employees: [],
  error: ""
};

const fetchingEmployees = (state, action) => {
  console.log(action);
  return Object.assign({}, state, { employees: action.payload });
};

const fetchEmployeesFail = (state, action) => {
  return Object.assign({}, state, { error: action.payload });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return fetchingEmployees(state, action);

    case actionTypes.FETCH_EMPLOYEES_FAIL:
      return fetchEmployeesFail(state, action);

    default:
      return state;
  }
};

export default reducer;
