import * as api from "../api";
import { CUSTOMER_AUTH } from "../constants/actionTypes";

export const customerSignUp =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.customerSignUp(customerAuthData);
      dispatch({ type: CUSTOMER_AUTH, data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

export const customerSignIn =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.customerSignIn(customerAuthData);
      dispatch({ type: CUSTOMER_AUTH, data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
