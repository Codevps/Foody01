import * as api from "../api";
import { CREATE_ADDRESS, GET_ADDRESS } from "../constants/actionTypes";
export const getAddresses = () => async (dispatch) => {
  try {
    const { data } = await api.getAddress();
    dispatch({ type: GET_ADDRESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const saveAddresses = (address) => async (dispatch) => {
  try {
    const { data } = await api.saveAddress(address);
    dispatch({ type: CREATE_ADDRESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
