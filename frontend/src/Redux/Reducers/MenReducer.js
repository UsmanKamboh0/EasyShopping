import {
  PRODUCT_UPDATE_FAIL,
  ADMIN_MEN_PRODUCT_REQUEST,
  ADMIN_MEN_PRODUCT_SUCCESS,
  ADMIN_MEN_PRODUCT_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  MenPRODUCT_DETAILS_FAIL,
  MenPRODUCT_DETAILS_REQUEST,
  MenPRODUCT_DETAILS_SUCCESS,
  MenPRODUCT_LIST_FAIL,
  MenPRODUCT_LIST_REQUEST,
  MenPRODUCT_LIST_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  CLEAR_ERRORS
} from "../Constants/MenConstants";

// PRODUCT LIST
export const MenproductListReducer = (state = { mproducts: [] }, action) => {
  switch (action.type) {
    case MenPRODUCT_LIST_REQUEST:
    case ADMIN_MEN_PRODUCT_REQUEST:
      return { loading: true, mproducts: [] };
    case MenPRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        mproducts: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ADMIN_MEN_PRODUCT_SUCCESS:
      return {
        loading: false,
        mproducts: action.payload.products,
      };

    case MenPRODUCT_LIST_FAIL:
    case ADMIN_MEN_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const menproductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const newMenReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};
// SINGLE PRODUCT
export const MenproductDetailsReducer = (
  state = { product: [] },
  action
) => {
  switch (action.type) {
    case MenPRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MenPRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case MenPRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// create PRODUCT
export const menproductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
// EDIT PRODUCT
export const MenproductEditReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PRODUCT_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};