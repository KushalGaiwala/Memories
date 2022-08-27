import { FETCH_POST_BY_ID, SAVE_CURRENT_POST } from "../constants/actionTypes";

export default (
  post = {
    _id: "",
    name: "",
  },
  action
) => {
  switch (action.type) {
    case SAVE_CURRENT_POST:
      return action.payload;
    case FETCH_POST_BY_ID:
      return action.payload;
    default:
      return post;
  }
};
