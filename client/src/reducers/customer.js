import {
  CUSTOMER_AUTH,
  FETCH_CUS,
  START_LOADING,
  END_LOADING,
  LOGOUT,
} from "../constants/actionTypes";

const customer = (state = { customerData: null }, action) => {
  switch (action.type) {
    case FETCH_CUS:
      return {
        ...state,
        customer: action.payload.data,
      };
    case CUSTOMER_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, customerData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, customerData: null };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default customer;
