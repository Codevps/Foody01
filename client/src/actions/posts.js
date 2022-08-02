import * as api from "../api";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_POST,
  UPDATE,
} from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//   try {
//     const {
//       data: { data },
//     } = await api.fetchPostsBySearch(searchQuery);

//     dispatch({ type: FETCH_BY_SEARCH, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPostsBySearch = (search) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(search);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
