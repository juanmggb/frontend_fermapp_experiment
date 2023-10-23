import {
  EXPERIMENT_LIST_FAIL,
  EXPERIMENT_LIST_REQUEST,
  EXPERIMENT_LIST_SUCCESS,
  REGISTER_EXPERIMENT_FAIL,
  REGISTER_EXPERIMENT_REQUEST,
  REGISTER_EXPERIMENT_RESET,
  REGISTER_EXPERIMENT_SUCCESS,
} from "../../constants/experimentConstants";

const experimentsInitialState = {
  loading: false,
  experiments: null,
  error: null,
};

export const experimentListReducer = (
  state = experimentsInitialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case EXPERIMENT_LIST_REQUEST:
      return { loading: true };

    case EXPERIMENT_LIST_SUCCESS:
      return { loading: false, experiments: payload };

    case EXPERIMENT_LIST_FAIL:
      return { loading: false, error: payload };

    case REGISTER_EXPERIMENT_RESET:
      return experimentsInitialState;

    default:
      return state;
  }
};

// Define initial state
const registerInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const registerExperimentReducer = (
  state = registerInitialState,
  action
) => {
  const { type, payload } = action; // Destructure action object
  switch (type) {
    // When a register experiment request is made, set loading to true
    case REGISTER_EXPERIMENT_REQUEST:
      return { loading: true };

    //   On successful register experiment, set loading to false and success to true
    case REGISTER_EXPERIMENT_SUCCESS:
      return { loading: false, success: true };

    //   On failure, set loading to false and update error message
    case REGISTER_EXPERIMENT_FAIL:
      return { loading: false, error: payload };

    //   Reset the state to initial state
    case REGISTER_EXPERIMENT_RESET:
      return registerInitialState;

    //   Default case return the current state
    default:
      return state;
  }
};
