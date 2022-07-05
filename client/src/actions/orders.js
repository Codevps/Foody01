import * as api from "../api";
import {
  CREATE_ORDER,
  FETCH_ORDERS,
  CUS_UPDATE_ORDER,
  RES_UPDATE_ORDER,
} from "../constants/actionTypes";
export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();
    dispatch({ type: FETCH_ORDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (order, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(order);
    dispatch({ type: CREATE_ORDER, payload: data });
    navigate("/cart/ordered");
  } catch (error) {
    console.log(error);
  }
};
export const cusUpdateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.cusUpdateOrder(id, order);
    dispatch({ type: CUS_UPDATE_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resUpdateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.resUpdateOrder(id, order);
    dispatch({ type: RES_UPDATE_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
