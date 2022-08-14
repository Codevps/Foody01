import {
  FETCH_RES,
  FETCH_RES_BY_ID,
  START_LOADING,
  END_LOADING,
  LOGOUT,
  RESTAURANT_AUTH,
} from "../constants/actionTypes";

const restaurant = (state = { restaurant: [] }, action) => {
  switch (action.type) {
    case FETCH_RES:
      return {
        ...state,
        restaurant: action.payload.data,
      };
    case FETCH_RES_BY_ID:
      return { ...state, rest: action.payload };
    case RESTAURANT_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, restaurant: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, restaurant: null };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default restaurant;
