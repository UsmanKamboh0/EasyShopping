import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRoute from "./PrivateRouter";
// import Products from "./screens/Products";
import Search from "./components/homeComponents/Search";
import "./css/xpoge.css";
import store from "./Redux/store";
import WebFont from "webfontloader";
import "./css/responsive.css";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.css"
// import Header from "./components/Header";
// import WomenProducts from "./screens/WomenProducts";
import WomenSingleProduct from "./screens/WomenSingleProduct";
// import MenProducts from "./screens/MenProduct";
import MenSingleProduct from "./screens/MenSingleProduct";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { loadUser, updateUser } from "./Redux/Actions/userActions";
import ConfrimOrder from "./screens/ConfrimOrder";
import OrderSuccess from "./screens/OrderSuccess";
import MyOrders from "./screens/MyOrders";
import OrderDetails from "./screens/OrderDetails";
import Header1 from "./components/Header1";
// import about from "./components/vendors/about";
import ShopSection from "./components/homeComponents/ShopSection";
import Sidebar from "./components/admin1/HomeScreen/Sidebar.js";
import AdminDashboard from "./components/admin1/HomeScreen/HomeScreen";
import ProductScreen from "./components/admin1/HomeScreen/Products/ProductScreen";
import AddProductMain from "./components/admin1/HomeScreen/Products/MainProductAdd";
import MainProductAdd from "./components/admin1/HomeScreen/Products/MainProductAdd";
import adminpr from "./components/admin1/HomeScreen/Products/Products";
import MainProducts from "./components/admin1/HomeScreen/Products/MainProducts";
import MenProductScreen from "./components/admin1/HomeScreen/Men Products/MenProductScreen";
import AddMenProduct from "./components/admin1/HomeScreen/Men Products/AddMenProduct";
import MainMenProductAdd from "./components/admin1/HomeScreen/Men Products/MainMenProductAdd";
import MainWomenProducts from "./components/admin1/HomeScreen/Women Products/MainWomenProducts";
import WomenProductScreen from "./components/admin1/HomeScreen/Women Products/WomenProductScreen";
import AddWomenProduct from "./components/admin1/HomeScreen/Women Products/AddWomenProduct";
import OrderMain from "./components/admin1/HomeScreen/Orders/OrderMain";
import AreaRechartComponent from "./components/admin1/HomeScreen/chartss";

import AllOrderScreen from "./components/admin1/HomeScreen/Orders/AllOrderScreen";

import MainWomenProductAdd from "./components/admin1/HomeScreen/Women Products/MainProductAdd";
import OrderDetailScreen from "./components/admin1/HomeScreen/Orders/OrderDetailScreen";
import UsersScreen from "./components/admin1/HomeScreen/User/UserScreen";
import UserOrderDetailScreen from "../src/screens/Order/OrderDetailScreen";
import EditMainWomen from "./components/admin1/HomeScreen/Women Products/EditMainWomen";
import EditMainMen from "./components/admin1/HomeScreen/Men Products/EditMainMen";
import EditMain from "./components/admin1/HomeScreen/Products/EditMain";
import MainKidProductAdd from "./components/admin1/HomeScreen/KidsProducts/MainKidProductAdd";
import KidProductScreen from "./components/admin1/HomeScreen/KidsProducts/KidProductScreen";
import EditMain1 from "./components/admin1/HomeScreen/KidsProducts/EditMainKid";
import KidsProducts from "./screens/KidsProducts";
import KidSingleProduct from "./screens/KidSingleProduct";
import ProductReviews from "./components/admin1/HomeScreen/Reviews/ProductReview";
import updateuser from "./components/admin1/HomeScreen/User/updateuser";
import Loadable from 'react-loadable';
import Loading from "./components/LoadingError/Loading";


const HomeScreen = Loadable({
  loader: () => import(/*webpackChunkName: "HomeScreen"*/"./screens/HomeScreen"),
  loading: Loading
});
const Products = Loadable({
  loader: () => import(/*webpackChunkName: "Products"*/"./screens/Products"),
  loading: Loading
});
const Header = Loadable({
  loader: () => import(/*webpackChunkName: "Header"*/"./components/Header"),
  loading: Loading
});
const SingleProduct = Loadable({
  loader: () => import(/*webpackChunkName: "SingleProduct"*/"./screens/SingleProduct"),
  loading: Loading
});
const about = Loadable({
  loader: () => import(/*webpackChunkName: "about"*/"./components/vendors/about"),
  loading: Loading
});
const WomenProducts = Loadable({
  loader: () => import(/*webpackChunkName: "WomenProducts"*/"./screens/WomenProducts"),
  loading: Loading
});
const MenProducts = Loadable({
  loader: () => import(/*webpackChunkName: "MenProducts"*/"./screens/MenProduct"),
  loading: Loading
});

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
store.dispatch(loadUser());
getStripeApiKey();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/header" component={Header} exact />
        <Route path="/search/:keyword" component={Products} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route path="/search/:keyword/page/:pageNumber"component={HomeScreen}exact/>
        <Route path="/EasyShopping" component={HomeScreen} exact />
<Route path="/product/:id" component={SingleProduct} />
        <Route path="/contact" component={about} />
        <Route path="/products" component={Products} />
        <Route path="/WomenProducts" component={WomenProducts} />
        <Route path="/MenProducts" component={MenProducts} />
        <Route path="/Wproduct/:id" component={WomenSingleProduct} />
        <Route path="/Mproduct/:id" component={MenSingleProduct} />
        <Route path="/search" component={Search} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/ResetPassword/:token" component={ResetPassword} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/s" component={ShopSection} />
        <Route path="/cart" component={CartScreen} />
        <ProtectedRoute path="/shipping" component={ShippingScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/success" component={OrderSuccess} />
        <Route path="/orders" component={MyOrders} />
        <Route path="/confrimorder" component={ConfrimOrder} />
        <Route path="/order/:id" component={UserOrderDetailScreen} />
        <Route path="/header1" component={Header1} />
        <ProtectedRoute path="/admindashboard" component={AdminDashboard} />
        <Route path="/adminmenproducts" component={MenProductScreen} />
        <Route path="/adminkidproducts" component={KidProductScreen} />
        <Route path="/adminmenproduct" component={MainMenProductAdd} />
        <Route path="/adminwomenproducts" component={WomenProductScreen} />
        <Route path="/adminwomenproduct" component={MainWomenProductAdd} />
        <Route path="/adminorders" component={AllOrderScreen} />
        <Route path="/adminorder/:id" component={OrderDetailScreen} />
        <Route path="/adminusers" component={UsersScreen} />
        <Route path="/Wedit/:id" component={EditMainWomen} />
        <Route path="/Medit/:id" component={EditMainMen} />
        <Route path="/Kedit/:id" component={EditMain1} />
        <Route path="/edit/:id" component={EditMain} />
        <Route path="/Kid" component={MainKidProductAdd} />
        <Route path="/ChildrensProducts" component={KidsProducts} />
        <Route path="/Kproduct/:id" component={KidSingleProduct} />
        <Route path="/reviews" component={ProductReviews} />
        <Route exact path="/adminproducts" component={ProductScreen} />
        <Route exact path="/adminproduct" isAdmin={true} component={MainProductAdd} />
        <Route path="/Side1" component={Sidebar} />
        <Route path="/UserUpdate/:id" component={updateuser} />


        
        {stripeApiKey && (
          <Elements stripe={loadStripe("pk_test_51LRwwYIs6W3ORA5bISx67HuvAx33K8AFqwWIU5bzckhoGGL9Nw2luA1NtmFOaHkbKfMGnoRO8oLeexM1rpqG4jJl00GvyozTHS")}>
            <ProtectedRoute path="/process/payment" component={PaymentScreen} />
          </Elements>
        )}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
