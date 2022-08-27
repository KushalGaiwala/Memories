import jwt_decode from "jwt-decode";
import * as api from "../api";
import {
  AUTH_GOOGLE_SIGNIN,
  AUTH_GOOGLE_SIGNOUT,
  AUTH_SIGNUP,
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from "../constants/actionTypes";

export const authGoogleLogin = (token) => async (dispatch) => {
  try {
    const result = jwt_decode(token);
    const profileObj = {
      result: {
        _id: result.sub,
        name: result.name,
        email: result.email,
        picture: result.picture,
        givenName: result.given_name,
        emailVerified: result.email_verified,
      },
      token,
    };

    localStorage.setItem("profile", JSON.stringify(profileObj));
    dispatch({ type: AUTH_GOOGLE_SIGNIN, data: profileObj });
  } catch (error) {
    console.log(error);
  }
};

export const authGoogleLogout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: AUTH_GOOGLE_SIGNOUT, data: null });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    // console.log(data);
    localStorage.setItem("profile", JSON.stringify({ ...data }));
    dispatch({ type: AUTH_SIGNIN, data, navigate: navigate });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    localStorage.setItem("profile", JSON.stringify({ ...data }));
    dispatch({ type: AUTH_SIGNUP, data, navigate: navigate });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: AUTH_SIGNOUT, data: null });
  } catch (error) {
    console.log(error);
  }
};
