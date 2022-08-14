import * as api from "../api";
import {
  ADD_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  END_LOADING,
  FETCH_ITEMS,
  REMOVE_ITEM,
  START_LOADING,
} from "../constants/actionTypes";

export const getItems = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchItems();
    dispatch({ type: FETCH_ITEMS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createItem = (item, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createItem(item);
    navigate("/cart");
    dispatch({ type: CREATE_ITEM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const addItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addItem(id);
    dispatch({ type: ADD_ITEM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const removeItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.removeItem(id);
    dispatch({ type: REMOVE_ITEM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteItem(id);
    dispatch({ type: DELETE_ITEM, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
