import * as api from "../api";
import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  FETCH_IMAGES,
} from "../constants/actionTypes";

export const getImages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchImages();
    dispatch({ type: FETCH_IMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createImage = (post) => async (dispatch) => {
  try {
    const { data } = await api.createImage(post);
    dispatch({ type: CREATE_IMAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteImage = (id) => async (dispatch) => {
  try {
    await api.deleteImage(id);
    dispatch({ type: DELETE_IMAGE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
