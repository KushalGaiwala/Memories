import {
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  FETCH_ALL_POSTS,
  FETCH_POSTS_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
} from "../constants/actionTypes";

export default (
  posts = { data: [], currentPage: "", numberOfPages: "", isLoading: true },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...posts, isLoading: true };
    case STOP_LOADING:
      return { ...posts, isLoading: false };
    case CREATE_POST:
      posts.data.pop();
      return { ...posts, data: [action.payload, ...posts.data] };
    case UPDATE_POST:
      return {
        ...posts,
        data: posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      console.log("ID", action.payload._id);
      return {
        ...posts,
        data: posts.data.filter((post) => post._id !== action.payload._id),
      };
    case FETCH_ALL_POSTS:
      return {
        ...posts,
        data: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POSTS_BY_SEARCH:
      return {
        ...posts,
        data: action.payload,
      };
    default:
      return posts;
  }
};
