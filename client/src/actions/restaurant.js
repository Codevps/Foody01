import * as api from "../api";
import {
  END_LOADING,
  FETCH_RES,
  FETCH_RES_BY_ID,
  RESTAURANT_AUTH,
  START_LOADING,
} from "../constants/actionTypes";

export const restaurantSignUp =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.restaurantSignUp(customerAuthData);
      dispatch({ type: RESTAURANT_AUTH, data });
      navigate(`/dashboard/${data?._id}`);
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const restaurantSignIn =
  (restaurantAuthData, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.restaurantSignIn(restaurantAuthData);
      dispatch({ type: RESTAURANT_AUTH, data });
      navigate(`/dashboard/${data?.result._id}`);
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const getRes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRes();
    dispatch({ type: FETCH_RES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getResById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchResById(id);
    dispatch({ type: FETCH_RES_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
