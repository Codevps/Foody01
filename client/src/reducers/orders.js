import {
  CREATE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
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
    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        ),
      };
    default:
      return state;
  }
};
export default orders;
