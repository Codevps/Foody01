import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
      };
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
