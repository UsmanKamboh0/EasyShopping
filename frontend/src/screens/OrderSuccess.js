import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { WlistProduct } from '../Redux/Actions/WomenProductAction';
import { useDispatch, useSelector } from "react-redux";
import HoverImage from "react-hover-image";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const OrderSuccess = () => {
  const dispatch = useDispatch();

  const WomenproductList = useSelector((state) => state.WomenproductList);
  const { wproducts } = WomenproductList;

  useEffect(() => {
    dispatch(WlistProduct());
  }, [dispatch]);
  return (
    <>
     <Header/>
     <MobileMenu/>
<hr></hr>
      <div className="container-fluid">
        <div className="container text-center">
          <h1>Thank you.</h1>
          <p className="lead w-lg-50 mx-auto">Your order has been placed successfully.</p>
          <p className="w-lg-50 mx-auto"> We will immediatelly process your and it will be delivered in 2 - 5 business days.</p>
        </div>
        <h2 className="h5 mb-5 text-center"><Link to="/orders">View Orders</Link></h2>
        <div className="container">
          <h2 className="h5 mb-5 text-center">You may also like these products</h2>
          <div className="row">
            {wproducts.map((product,i) => (
              <div className="col-lg-3" key={i}>
                <div className="card text-center mb-3">
                  <div className="py-5 px-4">
                  <HoverImage className="img-fluid mb-4" src={product.image1} hoverSrc={product.image2} /> 
                    <h3 className="fs-6 text-truncate"><Link to={`/Wproduct/${product._id}`} className="stretched-link text-reset">{product.name}</Link></h3>
                    <span className="text-success">RS:{product.price}</span> <del className="text-muted">RS:650.83</del>
                  </div>
                  <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                    <span className="d-block">10%</span>
                    <span className="d-block">OFF</span>
                  </div>
                </div>
                
              </div>
            ))}
            
        </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default OrderSuccess
