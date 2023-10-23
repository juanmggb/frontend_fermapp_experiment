import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESET,
  REGISTER_USER_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
} from "../../constants/userConstants";

const userInitialState = {
  loading: false,
  users: null,
  error: null,
};

export const userListReducer = (state = userInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case USER_LIST_REQUEST:
      return { loading: true };

    case USER_LIST_SUCCESS:
      return { loading: false, users: payload };

    case USER_LIST_FAIL:
      return { loading: false, error: payload };

    case USER_LIST_RESET:
      return userInitialState;

    default:
      return state;
  }
};

const registerUserInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const registerUserReducer = (
  state = registerUserInitialState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };

    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true };

    case REGISTER_USER_FAIL:
      return { loading: false, error: payload };

    case REGISTER_USER_RESET:
      return registerUserInitialState;

    default:
      return state;
  }
};
