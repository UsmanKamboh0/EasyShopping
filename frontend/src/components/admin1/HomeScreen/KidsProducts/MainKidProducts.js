import React, { Fragment, useState, useEffect } from "react";

import Message from "../../../LoadingError/Error";
import Loading from "../../../LoadingError/Loading";

import { useSelector, useDispatch } from "react-redux";
import HoverImage from "react-hover-image";
import EditIcon from "@material-ui/icons/Edit";

import {
  // listProduct,
  getAdminKidProduct,
  newReview,
  KiddeleteProduct
} from "../../../../Redux/Actions/KidsAction";
import { Link } from "react-router-dom";


const MainKidProducts = ({ match }) => {


  const dispatch = useDispatch();
  const getKidproducts = useSelector((state) => state.getKidproducts);
  const { loading, error, kproducts } = getKidproducts;
  const kidproductDelete = useSelector((state) => state.kidproductDelete);
  const { error: errorDelete, success: successDelete } = kidproductDelete;


  // const keyword = match.params.keyword;

  ;
  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(KiddeleteProduct(id));
    }

  }

  useEffect(() => {
    dispatch(getAdminKidProduct());
  }, [dispatch, successDelete]);



  return (
    <>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="dashboard">
        {/* <MetaData title="Products List" /> */}
        {/* <Typography component="h1">Products</Typography> */}

        {/* <Sidebar /> */}
        <br></br>
        <div className="">
          <div className="content-header1">
            <h2 className="content-title1">
              Kids Products</h2>
            <div>
              <Link to="/Kid" className="btn btn-primary">
                Create new
              </Link>
            </div>
          </div>




          <br></br>

          <section className="">

            <div className=" card-body">
              {errorDelete && (
                <Message variant="alert-danger">{errorDelete}</Message>
              )}
              {loading ? (
                <Loading />
              ) : error ? (
                <Message variant="alert-danger">{error}</Message>
              ) : (

                <div className="row">

                  {kproducts.map((product) => (


                    <div className="col-lg-3 col-md-3 col-6" key={product._id}>

                      <div className="card card-product-grid shadow-sm">
                        <Link to="#" className="img-wrap">
                        <HoverImage src={product.image1} hoverSrc={product.image2} />
                        </Link>
                        <div className="info-wrap">
                        <Link to={`/Kedit/${product._id}`} className="  edit-button d-flex justify-content-center align-items-center"
                          >
                            <EditIcon />
                          </Link>
                          {product.name}
                          <div className="price mb-2">{product.price}</div>
                          <div className="row">
                          
                            <div
                              onClick={() => deleteProductHandler(product._id)}
                              // (params.getValue(params.id, "id"))
                              className="remove-button d-flex justify-content-center align-items-center"
                            >

                              <i className="fas fa-times"> </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              
              )}

            </div>
          </section>
          
        </div>
      </div>
    </>
  );
};

export default MainKidProducts;
