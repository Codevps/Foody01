import {
  CREATE_IMAGE,
  DELETE_IMAGE,
  FETCH_IMAGES,
} from "../constants/actionTypes";

const images = (state = { images: [] }, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload.data,
      };
    case CREATE_IMAGE:
      return { ...state, images: [...state.images, action.payload] };
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image._id !== action.payload),
      };

    default:
      return state;
  }
};
export default images;
