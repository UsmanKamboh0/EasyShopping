import axios from "axios";
import {
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
   PRODUCT_DELETE_FAIL,
  ADMIN_KIDS_PRODUCT_REQUEST,
  ADMIN_KIDS_PRODUCT_SUCCESS,
  ADMIN_KIDS_PRODUCT_FAIL,
PRODUCT_CREATE_FAIL,
PRODUCT_CREATE_REQUEST,
PRODUCT_CREATE_SUCCESS,
MenPRODUCT_DETAILS_FAIL,
MenPRODUCT_DETAILS_REQUEST,
MenPRODUCT_DETAILS_SUCCESS,
KIDS_PRODUCT_LIST_REQUEST,
KIDS_PRODUCT_LIST_SUCCESS,
KIDS_PRODUCT_LIST_FAIL,
NEW_REVIEW_REQUEST,
NEW_REVIEW_SUCCESS,
NEW_REVIEW_RESET,
NEW_REVIEW_FAIL,
CLEAR_ERRORS,
} from "../Constants/KidsConstants";
// import { logout } from "./userActions";

// Create Product
export const createKidProduct = (productData) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/Kproduct/Kid`,
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
// Get All Products For Admin
export const getAdminKidProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_KIDS_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/Kidproducts");

    dispatch({
      type:ADMIN_KIDS_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_KIDS_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// PRODUCT LIST
export const KlistProduct =
(keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
async (dispatch) => {
  try {
    dispatch({ type: KIDS_PRODUCT_LIST_REQUEST });

    let link = `/api/v1/Kproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

    if (category) {
      link = `/api/v1/Kproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
    }

    const { data } = await axios.get(link);

    dispatch({
      type: KIDS_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KIDS_PRODUCT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
  //Delete Product
  export const KiddeleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/Kproduct/Kid/${id}`);
  
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


  export const updateKidProduct = (id, productData) => async (dispatch) => {
    try {
      dispatch({ type:  PRODUCT_UPDATE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `/api/v1/Kproduct/Kid/${id}`,
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
export const KidlistProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MenPRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/Kproduct/Kid/${id}`); ///api/v1/product
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

  export const KidMenReview = (reviewData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(`/api/v1/Kproduct/review`, reviewData, config);
  
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

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };