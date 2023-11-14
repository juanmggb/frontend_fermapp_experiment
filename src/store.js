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
  userUpdateReducer,
  userRegisterReducer,
  userDeleteReducer,

  // Member
  memberListReducer,
  memberDetailsReducer,
  memberUpdateReducer,

  // Director
  directorListReducer,
} from "./lib/reducers/userReducers";

import {
  experimentListReducer,
  experimentRegisterReducer,
  experimentDetailsReducer,
  experimentDeleteReducer,
  experimentUpdateReducer,
} from "./lib/reducers/experimentReducers";

import {
  // Microorganism
  microorganismListReducer,
  microorganismDetailsReducer,
  microorganismUpdateReducer,
  microorganismRegisterReducer,
  microorganismDeleteReducer,
  // Substrate
  substrateListReducer,
  substrateDetailsReducer,
  substrateUpdateReducer,
  substrateRegisterReducer,
  substrateDeleteReducer,

  // Product
  productListReducer,
  productDetailsReducer,
  productUpdateReducer,
  productRegisterReducer,
  productDeleteReducer,
} from "./lib/reducers/elementReducers";

import {
  laboratoryListReducer,
  laboratoryDetailsReducer,
  laboratoryRegisterReducer,
  laboratoryUpdateReducer,
  laboratoryDeleteReducer,
} from "./lib/reducers/laboratoryReducers";

// //////////////////// Analysis imports //////////////////////////////////
import { simulationDataReducer } from "./lib/reducers/simulationReducers";

import {
  parameterOptimizationReducer,
  linearRegressionReducer,
} from "./lib/reducers/optimizationReducers";

const rootReducer = combineReducers({
  // Session
  userLogin: loginReducer,

  // Users
  userList: userListReducer,
  userUpdate: userUpdateReducer,

  userRegister: userRegisterReducer,
  userDelete: userDeleteReducer,

  // Members
  memberList: memberListReducer,
  memberDetails: memberDetailsReducer,
  memberUpdate: memberUpdateReducer,

  // Director
  directorList: directorListReducer,
  // Experiment
  experimentList: experimentListReducer,
  experimentDetails: experimentDetailsReducer,
  experimentRegister: experimentRegisterReducer,
  experimentDelete: experimentDeleteReducer,
  experimentUpdate: experimentUpdateReducer,

  // Microorganism
  microorganismList: microorganismListReducer,
  microorganismDetails: microorganismDetailsReducer,
  microorganismUpdate: microorganismUpdateReducer,
  microorganismRegister: microorganismRegisterReducer,
  microorganismDelete: microorganismDeleteReducer,

  // Substrate
  substrateList: substrateListReducer,
  substrateDetails: substrateDetailsReducer,
  substrateUpdate: substrateUpdateReducer,
  substrateRegister: substrateRegisterReducer,
  substrateDelete: substrateDeleteReducer,

  // Product
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productUpdate: productUpdateReducer,
  productRegister: productRegisterReducer,
  productDelete: productDeleteReducer,

  // Laboratories
  laboratoryList: laboratoryListReducer,
  laboratoryDetails: laboratoryDetailsReducer,
  laboratoryRegister: laboratoryRegisterReducer,
  laboratoryUpdate: laboratoryUpdateReducer,
  laboratoryDelete: laboratoryDeleteReducer,

  // Simulation
  simulationData: simulationDataReducer,

  // Optimization
  parameterOptimization: parameterOptimizationReducer,
  linearRegression: linearRegressionReducer,
});

const token = localStorage.getItem("token" || null);

const memberId = localStorage.getItem("memberId" || null);

const initialState = {
  userLogin: {
    token,
    memberId,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
