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
  getAdminWomenProduct,
  womendeleteProduct,
} from "../../../../Redux/Actions/WomenProductAction";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
// import MetaData from "../MetaData";
import { Typography } from "@material-ui/core";

const MainWomenProducts = ({ match }) => {


  const dispatch = useDispatch();
  const getAdminWomenProducts = useSelector((state) => state.getAdminWomenProducts);
  const { loading, error, wproducts, productsCount, resultPerPage, filteredProductsCount } = getAdminWomenProducts;
  const womenproductDelete = useSelector((state) => state.womenproductDelete);
  const { error: errorDelete, success: successDelete } = womenproductDelete;


  // const keyword = match.params.keyword;

  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };
  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(womendeleteProduct(id));
    }

  }

  useEffect(() => {
    dispatch(getAdminWomenProduct());
  }, [dispatch, successDelete]);



  return (
    <>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        {/* <MetaData title="Products List" /> */}
        {/* <Typography component="h1">Products</Typography> */}

        {/* <Sidebar /> */}
        <br></br>
        <div className="">
          <div className="content-header1">
            <h2 className="content-title1">
              Women Products</h2>
            <div>
              <Link to="/adminwomenproduct" className="btn btn-primary">
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

                  {wproducts.map((product) => (


                    <div className="col-lg-3 col-md-3 col-6" key={product._id}>

                      <div className="card card-product-grid shadow-sm">
                        <Link to="#" className="img-wrap">
                        <HoverImage src={product.image1} hoverSrc={product.image2} />
                        </Link>
                        <div className="info-wrap">
                        <Link to={`/Wedit/${product._id}`} className="  edit-button d-flex justify-content-center align-items-center"
                          >
                            <EditIcon />
                          </Link>
                          {product.name}
                          <div className="price mb-2">{product.price}</div>
                          <div className="">
                          
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

export default MainWomenProducts;
