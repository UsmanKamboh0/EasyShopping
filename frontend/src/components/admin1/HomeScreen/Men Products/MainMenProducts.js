import React, { Fragment, useState, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGridPro } from '@mui/x-data-grid-pro';
import Pagination from "react-js-pagination";
import Message from "../../../LoadingError/Error";
import Loading from "../../../LoadingError/Loading";
// import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import HoverImage from "react-hover-image";
import EditIcon from "@material-ui/icons/Edit";

import {
  // listProduct,
  getAdminMenProduct,
  newReview,
  mendeleteProduct,
} from "../../../../Redux/Actions/MenAction";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
// import MetaData from "../MetaData";
import { Typography } from "@material-ui/core";

const MainMenProducts = ({ match }) => {


  const dispatch = useDispatch();
  const getAdminMenProducts = useSelector((state) => state.getAdminMenProducts);
  const { loading, error, mproducts } = getAdminMenProducts;
  const menproductDelete = useSelector((state) => state.menproductDelete);
  const { error: errorDelete, success: successDelete } = menproductDelete;


  // const keyword = match.params.keyword;

  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };
  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(mendeleteProduct(id));
    }

  }

  useEffect(() => {
    dispatch(getAdminMenProduct());
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
              Men Products</h2>
            <div>
              <Link to="/adminmenproduct" className="btn btn-primary">
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

                  {mproducts.map((product) => (


                    <div className="col-lg-3 col-md-3 col-6" key={product._id}>

                      <div className="card card-product-grid shadow-sm">
                        <Link to="#" className="img-wrap">
                          <HoverImage src={product.image1} hoverSrc={product.image2} />
                        </Link>
                        <div className="info-wrap">


                          <Link to={`/Medit/${product._id}`} className="  edit-button d-flex justify-content-center align-items-center"
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

export default MainMenProducts;
