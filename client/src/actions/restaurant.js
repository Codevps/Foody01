import * as api from "../api";
import {
  FETCH_RES,
  FETCH_RES_BY_ID,
  RESTAURANT_AUTH,
} from "../constants/actionTypes";

export const restaurantSignUp =
  (customerAuthData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.restaurantSignUp(customerAuthData);
      dispatch({ type: RESTAURANT_AUTH, data });
      navigate(`/dashboard/${data?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const restaurantSignIn =
  (restaurantAuthData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.restaurantSignIn(restaurantAuthData);
      dispatch({ type: RESTAURANT_AUTH, data });
      navigate(`/dashboard/${data?.result._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const getRes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRes();
    dispatch({ type: FETCH_RES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getResById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchResById(id);
    dispatch({ type: FETCH_RES_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};
