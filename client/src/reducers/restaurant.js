import { LOGOUT, RESTAURANT_AUTH } from "../constants/actionTypes";

const restaurant = (state = { restaurantData: null }, action) => {
  switch (action.type) {
    case RESTAURANT_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, restaurantData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, restaurantData: null };
    default:
      return state;
  }
};
export default restaurant;
