import {
  DIRECTOR_LIST_FAIL,
  DIRECTOR_LIST_REQUEST,
  DIRECTOR_LIST_RESET,
  DIRECTOR_LIST_SUCCESS,
  MEMBER_DETAILS_FAIL,
  MEMBER_DETAILS_REQUEST,
  MEMBER_DETAILS_RESET,
  MEMBER_DETAILS_SUCCESS,
  MEMBER_LIST_FAIL,
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_RESET,
  MEMBER_LIST_SUCCESS,
  MEMBER_UPDATE_FAIL,
  MEMBER_UPDATE_REQUEST,
  MEMBER_UPDATE_RESET,
  MEMBER_UPDATE_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESET,
  REGISTER_USER_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
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

const userUpdateInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const userUpdateReducer = (state = userUpdateInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case USER_UPDATE_FAIL:
      return { loading: false, error: payload };

    case USER_UPDATE_RESET:
      return userUpdateInitialState;

    default:
      return state;
  }
};

const registerUserInitialState = {
  loading: false,
  success: false,
  error: null,
};

// Register user and member
export const userRegisterReducer = (
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

// Delete user and member
const userDeleteInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const userDeleteReducer = (state = userDeleteInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case USER_DELETE_REQUEST:
      return { loading: true };

    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };

    case USER_DELETE_FAIL:
      return { loading: false, error: payload };

    case USER_DELETE_RESET:
      return userDeleteInitialState;

    default:
      return state;
  }
};

// Members

const memberInitialState = {
  loading: false,
  members: null,
  error: null,
};

export const memberListReducer = (state = memberInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true };

    case MEMBER_LIST_SUCCESS:
      return { loading: false, members: payload };

    case MEMBER_LIST_FAIL:
      return { loading: false, error: payload };

    case MEMBER_LIST_RESET:
      return memberInitialState;

    default:
      return state;
  }
};

const memberDetailsInitialState = {
  loading: false,
  member: null,
  error: null,
};

export const memberDetailsReducer = (
  state = memberDetailsInitialState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case MEMBER_DETAILS_REQUEST:
      return { loading: true };

    case MEMBER_DETAILS_SUCCESS:
      return { loading: false, member: payload };

    case MEMBER_DETAILS_FAIL:
      return { loading: false, error: payload };

    case MEMBER_DETAILS_RESET:
      return memberDetailsInitialState;

    default:
      return state;
  }
};

const memberUpdateInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const memberUpdateReducer = (
  state = memberUpdateInitialState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case MEMBER_UPDATE_REQUEST:
      return { loading: true };

    case MEMBER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case MEMBER_UPDATE_FAIL:
      return { loading: false, error: payload };

    case MEMBER_UPDATE_RESET:
      return memberUpdateInitialState;

    default:
      return state;
  }
};

// Directors
const directorInitialState = {
  loading: false,
  users: null,
  error: null,
};

export const directorListReducer = (state = directorInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case DIRECTOR_LIST_REQUEST:
      return { loading: true };

    case DIRECTOR_LIST_SUCCESS:
      return { loading: false, directors: payload };

    case DIRECTOR_LIST_FAIL:
      return { loading: false, error: payload };

    case DIRECTOR_LIST_RESET:
      return directorInitialState;

    default:
      return state;
  }
};
