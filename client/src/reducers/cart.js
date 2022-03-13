import {
  ADD_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  REMOVE_ITEM,
} from "../constants/actionTypes";

const items = (state = { items: [] }, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload.data,
      };
    case CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
export default items;
