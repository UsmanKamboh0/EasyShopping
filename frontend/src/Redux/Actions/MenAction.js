import axios from "axios";
import {

  ADMIN_MEN_PRODUCT_REQUEST,
  ADMIN_MEN_PRODUCT_SUCCESS,
  ADMIN_MEN_PRODUCT_FAIL,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
    MenPRODUCT_DETAILS_FAIL,
    MenPRODUCT_DETAILS_REQUEST,
    MenPRODUCT_DETAILS_SUCCESS,
    MenPRODUCT_LIST_FAIL,
    MenPRODUCT_LIST_REQUEST,
    MenPRODUCT_LIST_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/MenConstants";
import { logout } from "./userActions";

// PRODUCT LIST
export const MlistProduct =
(keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
async (dispatch) => {
  try {
    dispatch({ type: MenPRODUCT_LIST_REQUEST });

    let link = `/api/v1/Mproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

    if (category) {
      link = `/api/v1/Mproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
    }

    const { data } = await axios.get(link);

    dispatch({
      type: MenPRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MenPRODUCT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get All Products For Admin
export const getAdminMenProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MEN_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/Menproducts");

    dispatch({
      type:ADMIN_MEN_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_MEN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

  //Delete Product
export const mendeleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const { data } = await axios.delete(`/api/v1/Mproduct/Men/${id}`);

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


export const updateMenProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type:  PRODUCT_UPDATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/Mproduct/Men/${id}`,
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

// SINGLE PRODUCT
  export const MenlistProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: MenPRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v1/Mproduct/Men/${id}`); ///api/v1/product
      dispatch({ type: MenPRODUCT_DETAILS_SUCCESS, payload: data.product, });
    }
  
    catch (error) {
      dispatch({
        type: MenPRODUCT_DETAILS_FAIL,
        payload:
  
          error.response.data.message,
      });
    }
  };
  // PRODUCT REVIEW CREATE createProductReview

  export const newMenReview = (reviewData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(`/api/v1/Mproduct/review`, reviewData, config);
  
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


// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/Mproduct/Men`,
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