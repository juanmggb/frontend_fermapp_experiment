import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../../constants/userConstants";
import axios from "../axiosConfig";

export const fetchUserList = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });

  try {
    const { data } = await axios.get("users/");

    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postUser = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const { data } = await axios.post("users/", user);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
