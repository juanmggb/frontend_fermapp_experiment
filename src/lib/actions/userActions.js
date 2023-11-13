import { RESET_LABORATORY_LIST } from "../../constants/laboratoryConstants";
import {
  DIRECTOR_LIST_FAIL,
  DIRECTOR_LIST_REQUEST,
  DIRECTOR_LIST_SUCCESS,
  MEMBER_DETAILS_FAIL,
  MEMBER_DETAILS_REQUEST,
  MEMBER_DETAILS_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_RESET,
  MEMBER_LIST_SUCCESS,
  MEMBER_UPDATE_FAIL,
  MEMBER_UPDATE_REQUEST,
  MEMBER_UPDATE_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../../constants/userConstants";
import axios from "../axiosConfig";

// Users
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

export const updateUser = (userData, userId) => async (dispatch) => {
  dispatch({ type: USER_UPDATE_REQUEST });

  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data", // este tipo de datos se usa para enviar media files, como imagenes
        // Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(`users/${userId}/`, userData, config);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    // Reset user and member list
    dispatch({ type: USER_LIST_RESET });
    dispatch({ type: MEMBER_LIST_RESET });

    // Reset laboratory list to update the list of members in each laboratory
    dispatch({ type: RESET_LABORATORY_LIST });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Register user and member
export const postUser = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data", // este tipo de datos se usa para enviar media files, como imagenes
        // Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post("users/", user, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    // Reset user and member list
    dispatch({ type: USER_LIST_RESET });
    dispatch({ type: MEMBER_LIST_RESET });

    // Reset laboratory list to update the list of members in each laboratory
    dispatch({ type: RESET_LABORATORY_LIST });
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

// Delete user and member
export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST });

  try {
    const { data } = await axios.delete(`users/${userId}/`);

    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
    // Reset user and member list
    dispatch({ type: USER_LIST_RESET });
    dispatch({ type: MEMBER_LIST_RESET });

    // Reset laboratory list to update the list of members in each laboratory
    dispatch({ type: RESET_LABORATORY_LIST });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Members
export const fetchMemberList =
  (search = "") =>
  async (dispatch) => {
    dispatch({ type: MEMBER_LIST_REQUEST });

    try {
      const { data } = await axios.get(`members${search}`);

      dispatch({ type: MEMBER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MEMBER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchMemberDetails = (memberId) => async (dispatch) => {
  dispatch({ type: MEMBER_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`members/${memberId}`);

    dispatch({ type: MEMBER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MEMBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateMember = (memberData, memberId) => async (dispatch) => {
  dispatch({ type: MEMBER_UPDATE_REQUEST });

  try {
    const { data } = await axios.put(`members/${memberId}/`, memberData);
    dispatch({ type: MEMBER_UPDATE_SUCCESS, payload: data });
    // Reset member list
    dispatch({ type: MEMBER_LIST_RESET });

    // Reset laboratory list to update the list of members in each laboratory
    dispatch({ type: RESET_LABORATORY_LIST });
  } catch (error) {
    dispatch({
      type: MEMBER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Directors
export const fetchDirectorList = () => async (dispatch) => {
  dispatch({ type: DIRECTOR_LIST_REQUEST });

  try {
    const { data } = await axios.get("directors/");

    dispatch({ type: DIRECTOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DIRECTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
