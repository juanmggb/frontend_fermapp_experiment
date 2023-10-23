import {
  MICROORGANISM_LIST_FAIL,
  MICROORGANISM_LIST_REQUEST,
  MICROORGANISM_LIST_RESET,
  MICROORGANISM_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESET,
  PRODUCT_LIST_SUCCESS,
  SUBSTRATE_LIST_FAIL,
  SUBSTRATE_LIST_REQUEST,
  SUBSTRATE_LIST_RESET,
  SUBSTRATE_LIST_SUCCESS,
} from "../../constants/elementConstants";

const microorganismInitialState = {
  loading: false,
  microorganisms: null,
  error: null,
};

export const microorganismListReducer = (
  state = microorganismInitialState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case MICROORGANISM_LIST_REQUEST:
      return { loading: true };

    case MICROORGANISM_LIST_SUCCESS:
      return { loading: false, microorganisms: payload };

    case MICROORGANISM_LIST_FAIL:
      return { loading: false, error: payload };

    case MICROORGANISM_LIST_RESET:
      return microorganismInitialState;

    default:
      return state;
  }
};

const substrateInitialState = {
  loading: false,
  substrates: null,
  error: null,
};

export const substrateListReducer = (state = substrateInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SUBSTRATE_LIST_REQUEST:
      return { loading: true };

    case SUBSTRATE_LIST_SUCCESS:
      return { loading: false, substrates: payload };

    case SUBSTRATE_LIST_FAIL:
      return { loading: false, error: payload };

    case SUBSTRATE_LIST_RESET:
      return substrateInitialState;

    default:
      return state;
  }
};

const productInitialState = {
  loading: false,
  products: null,
  error: null,
};

export const productListReducer = (state = productInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };

    case PRODUCT_LIST_RESET:
      return productInitialState;

    default:
      return state;
  }
};
