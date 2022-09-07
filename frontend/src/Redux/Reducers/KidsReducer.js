import {
PRODUCT_CREATE_FAIL,
PRODUCT_CREATE_REQUEST,
PRODUCT_CREATE_RESET,
PRODUCT_CREATE_SUCCESS,
ADMIN_KIDS_PRODUCT_REQUEST,
ADMIN_KIDS_PRODUCT_SUCCESS,
ADMIN_KIDS_PRODUCT_FAIL,
KIDS_PRODUCT_LIST_REQUEST,
KIDS_PRODUCT_LIST_SUCCESS,
KIDS_PRODUCT_LIST_FAIL,
PRODUCT_DELETE_REQUEST,
PRODUCT_DELETE_SUCCESS,
 PRODUCT_DELETE_FAIL,
 PRODUCT_UPDATE_REQUEST,
 PRODUCT_UPDATE_RESET,
 PRODUCT_UPDATE_SUCCESS,
 PRODUCT_UPDATE_FAIL,
 MenPRODUCT_DETAILS_FAIL,
 MenPRODUCT_DETAILS_REQUEST,
 MenPRODUCT_DETAILS_SUCCESS,
 NEW_REVIEW_REQUEST,
 NEW_REVIEW_SUCCESS,
 NEW_REVIEW_RESET,
 NEW_REVIEW_FAIL,
 CLEAR_ERRORS,
} from "../Constants/KidsConstants";
// create PRODUCT
export const KidproductCreateReducer = (state = {}, action) => {
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

  export const KidproductListReducer = (state = { kproducts: [] }, action) => {
    switch (action.type) {
      case KIDS_PRODUCT_LIST_REQUEST:
        case ADMIN_KIDS_PRODUCT_REQUEST:
           return { loading: true, kproducts: [] };
      case KIDS_PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          pages: action.payload.pages,
          page: action.payload.page,
          kproducts: action.payload.products,
          productsCount: action.payload.productsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredProductsCount: action.payload.filteredProductsCount,
        };
        case ADMIN_KIDS_PRODUCT_SUCCESS:
          return {
            loading: false,
            kproducts: action.payload.products,
          };

      case KIDS_PRODUCT_LIST_FAIL:
        case ADMIN_KIDS_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

    // DELETE PRODUCT
export const kidproductDeleteReducer = (state = {}, action) => {
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
 export const KidproductEditReducer = (state = { product: {} }, action) => {
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

// SINGLE PRODUCT
export const KidproductDetailsReducer = (
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

export const newKidReviewReducer = (state = {}, action) => {
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