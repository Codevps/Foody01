import * as api from "../api";
import {
  CUSTOMER_AUTH,
  END_LOADING,
  FETCH_CUS,
  START_LOADING,
} from "../constants/actionTypes";

export const customerSignUp =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const { data } = await api.customerSignUp(customerAuthData);
      dispatch({ type: CUSTOMER_AUTH, data });
      navigate("/");
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const customerSignIn =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const { data } = await api.customerSignIn(customerAuthData);
      dispatch({ type: CUSTOMER_AUTH, data });
      navigate("/");
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const getCus = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCus();
    dispatch({ type: FETCH_CUS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
