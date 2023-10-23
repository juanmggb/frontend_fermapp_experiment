import axios from "../axiosConfig"; // Import your axios instance
import {
  MICROORGANISM_LIST_FAIL,
  MICROORGANISM_LIST_REQUEST,
  MICROORGANISM_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SUBSTRATE_LIST_FAIL,
  SUBSTRATE_LIST_REQUEST,
  SUBSTRATE_LIST_SUCCESS,
} from "../../constants/elementConstants";

export const fetchMicroorganismList = () => async (dispatch) => {
  dispatch({ type: MICROORGANISM_LIST_REQUEST });

  try {
    const { data } = await axios.get("microorganisms/");

    dispatch({ type: MICROORGANISM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MICROORGANISM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchSubstrateList = () => async (dispatch) => {
  dispatch({ type: SUBSTRATE_LIST_REQUEST });

  try {
    const { data } = await axios.get("substrates/");

    dispatch({ type: SUBSTRATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUBSTRATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchProductList = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });

  try {
    const { data } = await axios.get("products/");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
