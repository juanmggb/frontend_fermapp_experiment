import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./lib/reducers/sessionReducers";

import {
  userListReducer,
  registerUserReducer,
} from "./lib/reducers/userReducers";

import {
  experimentListReducer,
  registerExperimentReducer,
} from "./lib/reducers/experimentReducers";

import {
  microorganismListReducer,
  substrateListReducer,
  productListReducer,
} from "./lib/reducers/elementReducers";

const rootReducer = combineReducers({
  // Session
  userLogin: loginReducer,

  // Users
  userList: userListReducer,
  registerUser: registerUserReducer,
  // Experiment
  experimentList: experimentListReducer,
  registerExperiment: registerExperimentReducer,

  // Elements
  microorganismList: microorganismListReducer,
  substrateList: substrateListReducer,
  productList: productListReducer,
});

const token = localStorage.getItem("token" || null);

const initialState = {
  userLogin: {
    token,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
