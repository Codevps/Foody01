import {
  CREATE_ADDRESS,
  START_LOADING,
  END_LOADING,
  GET_ADDRESS,
} from "../constants/actionTypes";

const address = (state = { address: [] }, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload.data,
      };
    case CREATE_ADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default address;
