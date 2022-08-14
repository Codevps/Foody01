import * as api from "../api";
import {
  CREATE_ADDRESS,
  END_LOADING,
  GET_ADDRESS,
  START_LOADING,
} from "../constants/actionTypes";
export const getAddresses = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAddress();
    dispatch({ type: GET_ADDRESS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const saveAddresses = (address) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.saveAddress(address);
    dispatch({ type: CREATE_ADDRESS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
