import * as api from "../api";
import { RESTAURANT_AUTH } from "../constants/actionTypes";

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
