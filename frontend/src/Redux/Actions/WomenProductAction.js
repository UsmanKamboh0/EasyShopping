import axios from "axios";
import {

  
  ADMIN_WOMEN_PRODUCT_REQUEST,
  ADMIN_WOMEN_PRODUCT_SUCCESS,
  ADMIN_WOMEN_PRODUCT_FAIL,
    WomenPRODUCT_CREATE_REVIEW_FAIL,
    WomenPRODUCT_CREATE_REVIEW_REQUEST,
    WomenPRODUCT_CREATE_REVIEW_SUCCESS,
    WomenPRODUCT_DETAILS_FAIL,
    WomenPRODUCT_DETAILS_REQUEST,
    WomenPRODUCT_DETAILS_SUCCESS,
    WomenPRODUCT_LIST_FAIL,
    WomenPRODUCT_LIST_REQUEST,
    WomenPRODUCT_LIST_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  
  CLEAR_ERRORS,
} from "../Constants/WomenConstants";
import { logout } from "./userActions";

// PRODUCT LIST
export const WlistProduct =
(keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
async (dispatch) => {
  try {
    dispatch({ type: WomenPRODUCT_LIST_REQUEST });

    let link = `/api/v1/Wproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

    if (category) {
      link = `/api/v1/Wproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
    }

    const { data } = await axios.get(link);

    dispatch({
      type: WomenPRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WomenPRODUCT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
  // SINGLE PRODUCT
  export const WomenlistProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: WomenPRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v1/Wproduct/Women/${id}`); ///api/v1/product
      dispatch({ type: WomenPRODUCT_DETAILS_SUCCESS, payload: data.product, });
    }
  
    catch (error) {
      dispatch({
        type: WomenPRODUCT_DETAILS_FAIL,
        payload:
  
          error.response.data.message,
      });
    }
  };

  // Get All Products For Admin
export const getAdminWomenProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_WOMEN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/Womenproducts");

    dispatch({
      type:ADMIN_WOMEN_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_WOMEN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Update Product
export const updateWomenProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type:  PRODUCT_UPDATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/Wproduct/Women/${id}`,
      productData,
      config
    );

    dispatch({
      type:  PRODUCT_UPDATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type:  PRODUCT_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

  // PRODUCT REVIEW CREATE createProductReview

  export const newWomenReview = (reviewData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(`/api/v1/Wproduct/review`, reviewData, config);
  
      dispatch({
        type: NEW_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// PRODUCT REVIEW CREATE createProductReview
export const createProductReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: WomenPRODUCT_CREATE_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: WomenPRODUCT_CREATE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: WomenPRODUCT_CREATE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

  //Delete Product
  export const womendeleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/Wproduct/Women/${id}`);
  
      dispatch({
        type:PRODUCT_DELETE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload: error.response.data.message,
      });
    }
  }; 

  // Create Product
export const createWomenProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/Wproduct/Women`,
      productData,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:  PRODUCT_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};