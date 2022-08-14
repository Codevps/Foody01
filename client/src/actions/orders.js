import * as api from "../api";
import {
  CREATE_ORDER,
  FETCH_ORDERS,
  CUS_UPDATE_ORDER,
  RES_UPDATE_ORDER,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchOrders();
    dispatch({ type: FETCH_ORDERS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (order, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createOrder(order);
    dispatch({ type: CREATE_ORDER, payload: data });
    navigate("/cart/ordered");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const cusUpdateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.cusUpdateOrder(id, order);
    dispatch({ type: CUS_UPDATE_ORDER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const resUpdateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.resUpdateOrder(id, order);
    dispatch({ type: RES_UPDATE_ORDER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
