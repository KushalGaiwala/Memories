import * as api from "../api";
import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  FETCH_POST_BY_ID,
  UPDATE_POST,
  DELETE_POST,
  SAVE_CURRENT_POST,
  FETCH_POSTS_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
} from "../constants/actionTypes";

// Action Creators
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    console.log(data);
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addPost(newPost);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostById(id);
    dispatch({ type: FETCH_POST_BY_ID, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_POSTS_BY_SEARCH, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// export const saveCurrentPost = (postData) => {
export const saveCurrentPostId = (id) => {
  try {
    return { type: SAVE_CURRENT_POST, payload: { _id: id } };
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.removePost(id);
    dispatch({ type: DELETE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
