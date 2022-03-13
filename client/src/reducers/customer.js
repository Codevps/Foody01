import { CUSTOMER_AUTH, LOGOUT } from "../constants/actionTypes";

const customer = (state = { customerData: null }, action) => {
  switch (action.type) {
    case CUSTOMER_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, customerData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, customerData: null };
    default:
      return state;
  }
};
export default customer;
