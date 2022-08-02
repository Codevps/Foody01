import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_POST,
  UPDATE,
} from "../constants/actionTypes";

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
export default posts;
