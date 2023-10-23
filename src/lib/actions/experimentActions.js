import axios from "../axiosConfig"; // Import your axios instance
import {
  EXPERIMENT_LIST_FAIL,
  EXPERIMENT_LIST_REQUEST,
  EXPERIMENT_LIST_SUCCESS,
  REGISTER_EXPERIMENT_FAIL,
  REGISTER_EXPERIMENT_REQUEST,
  REGISTER_EXPERIMENT_SUCCESS,
} from "../../constants/experimentConstants";

export const fetchExperimentList = () => async (dispatch) => {
  dispatch({ type: EXPERIMENT_LIST_REQUEST });

  try {
    const { data } = await axios.get("experiments/");

    dispatch({ type: EXPERIMENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EXPERIMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postExperiment = (experimentData) => async (dispatch) => {
  dispatch({ type: REGISTER_EXPERIMENT_REQUEST });

  try {
    // Making a POST request to the '/experiments/' endpoint of your DRF API
    const { data } = await axios.post("/experiments/", experimentData);

    dispatch({
      type: REGISTER_EXPERIMENT_SUCCESS,
      payload: data, // you can store the returned data in your Redux state if needed
    });
  } catch (error) {
    dispatch({
      type: REGISTER_EXPERIMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
