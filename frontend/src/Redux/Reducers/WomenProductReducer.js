import {
  ADMIN_WOMEN_PRODUCT_REQUEST,
  ADMIN_WOMEN_PRODUCT_SUCCESS,
  ADMIN_WOMEN_PRODUCT_FAIL,
    WomenPRODUCT_DETAILS_FAIL,
    WomenPRODUCT_DETAILS_REQUEST,
    WomenPRODUCT_DETAILS_SUCCESS,
    WomenPRODUCT_LIST_FAIL,
    WomenPRODUCT_LIST_REQUEST,
    WomenPRODUCT_LIST_SUCCESS,
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
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  CLEAR_ERRORS 
  } from "../Constants/WomenConstants";
  
  // PRODUCT LIST
  export const WomenproductListReducer = (state = { wproducts: [] }, action) => {
    switch (action.type) {
      case WomenPRODUCT_LIST_REQUEST:
        case ADMIN_WOMEN_PRODUCT_REQUEST:

        return { loading: true, wproducts: [] };
      case WomenPRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          wproducts: action.payload.products,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
        case ADMIN_WOMEN_PRODUCT_SUCCESS:
          return {
            loading: false,
            wproducts: action.payload.products,
          };
      case WomenPRODUCT_LIST_FAIL:
        case ADMIN_WOMEN_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  // SINGLE PRODUCT
export const WomenproductDetailsReducer = (
  state = { product: [] },
  action
) => {
  switch (action.type) {
    case WomenPRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case WomenPRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case WomenPRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// create PRODUCT
export const womenproductCreateReducer = (state = {}, action) => {
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

export const newWomenReviewReducer = (state = {}, action) => {
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
  // DELETE PRODUCT
  export const womenproductDeleteReducer = (state = {}, action) => {
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
  // EDIT PRODUCT
export const WomenproductEditReducer = (state = { product: {} }, action) => {
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
