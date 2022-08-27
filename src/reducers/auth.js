import jwt_decode from "jwt-decode";
import {
  AUTH_GOOGLE_SIGNUP,
  AUTH_GOOGLE_SIGNIN,
  AUTH_GOOGLE_SIGNOUT,
  AUTH_SIGNUP,
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
    case AUTH_SIGNUP:
    case AUTH_GOOGLE_SIGNIN:
    case AUTH_GOOGLE_SIGNUP:
      console.log(jwt_decode(action?.data?.token));
      return { ...state, authData: action?.data, loading: false, errors: null };
    case AUTH_SIGNOUT:
    case AUTH_GOOGLE_SIGNOUT:
      return { ...state, authData: null, loading: false, errors: null };
    // case AUTH_SIGNUP:
    //   return;
    // case AUTH_SIGNIN:
    //   return;
    default:
      return state;
  }
};

export default authReducer;
