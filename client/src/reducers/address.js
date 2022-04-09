import { CREATE_ADDRESS, GET_ADDRESS } from "../constants/actionTypes";

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
    default:
      return state;
  }
};
export default address;
