import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
  newReviewReducer,
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productReviewsReducer,
  reviewReducer,

} from "./Reducers/ProductReducers";
import {
  KidproductCreateReducer,
  KidproductListReducer,
  kidproductDeleteReducer,
  KidproductEditReducer,
  KidproductDetailsReducer,
  newKidReviewReducer
} from "./Reducers/KidsReducer";
import { cartReducer } from "./Reducers/CartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  forgotPasswordReducer,
  userListReducer,
  UserDeleteReducer,
  UserEditReducer

} from "./Reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
  orderListReducer,
  orderDeliveredReducer,
  orderReducer,
} from "./Reducers/OrderReducres";
import {newWomenReviewReducer,WomenproductEditReducer, WomenproductDetailsReducer,womenproductDeleteReducer,womenproductCreateReducer, WomenproductListReducer } from "./Reducers/WomenProductReducer";
import {MenproductEditReducer,newMenReviewReducer, MenproductDetailsReducer,menproductCreateReducer, menproductDeleteReducer,MenproductListReducer } from "./Reducers/MenReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  WomenproductList:WomenproductListReducer,
  WomenproductDetails:WomenproductDetailsReducer,
  MenproductList:MenproductListReducer,
  MenproductDetails:MenproductDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  newReview: newReviewReducer,
  userDetails: userDetailsReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  productCreate: productCreateReducer,
  menproductCreate: menproductCreateReducer,
  womenproductCreate: womenproductCreateReducer,
  productDelete: productDeleteReducer,
  menproductDelete: menproductDeleteReducer,
  womenproductDelete: womenproductDeleteReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliveredReducer,
  userList: userListReducer,
  newMenReview:newMenReviewReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  newWomenReview:newWomenReviewReducer,
  WomenproductEdit: WomenproductEditReducer,
  MenproductEdit:MenproductEditReducer,
  productEdit:productEditReducer,
  getAdminMenProducts:MenproductListReducer,
  getAdminWomenProducts:WomenproductListReducer,
  KidproductCreate:KidproductCreateReducer,
  KidproductList:KidproductListReducer,
  KidsproductList:KidproductListReducer,
  getKidproducts:KidproductListReducer,
  kidproductDelete:kidproductDeleteReducer,
  KidproductEdit:KidproductEditReducer,
  KidproductDetail:KidproductDetailsReducer,
  newKidReview:newKidReviewReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  UserDelete:UserDeleteReducer,
  UserEdit:UserEditReducer,
  order: orderReducer
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : 
      // null,
      {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
