import {
  FETCH_RES,
  FETCH_RES_BY_ID,
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
      return { ...state, res: action.payload };

    case RESTAURANT_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, restaurant: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, restaurant: null };
    default:
      return state;
  }
};
export default restaurant;
