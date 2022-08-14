import {
  CREATE_ORDER,
  CUS_UPDATE_ORDER,
  START_LOADING,
  END_LOADING,
  FETCH_ORDERS,
  RES_UPDATE_ORDER,
} from "../constants/actionTypes";

const orders = (state = { orders: [] }, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload.data,
      };
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case CUS_UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        ),
      };
    case RES_UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        ),
      };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default orders;
