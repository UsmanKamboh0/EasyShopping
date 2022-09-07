import React, { Fragment, useState, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGridPro } from '@mui/x-data-grid-pro';
import Pagination from "react-js-pagination";
import EditIcon from "@material-ui/icons/Edit";

// import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../../../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
// import MetaData from "../MetaData";
import { Typography } from "@material-ui/core";
import HoverImage from "react-hover-image";

const MainProducts = ({ match }) => {


  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, productsCount, resultPerPage, filteredProductsCount } = productList;
  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;


  // const keyword = match.params.keyword;

  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };
  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
    }

  }
  useEffect(() => {
    dispatch(getAdminProduct());
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
            <h2 className="content-title1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Products</h2>
            <div>
              <Link to="/adminproduct" className="btn btn-primary">
                Create new
              </Link>
            </div>
          </div>




          <br></br>



          <section className="">

            <div className="card-body">
              {/* {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )} */}

              {/* <Message variant="alert-danger">{error}</Message> */}

              <div className="row">

                {products.map((product) => (


                  <div className="col-md-6 col-sm-6 col-lg-3 mb-5" key={product._id}>

                    <div className="card card-product-grid shadow-sm">
                      <Link to="#" className="img-wrap">
                      <HoverImage src={product.image1} hoverSrc={product.image2} />
                      </Link>
                      <div className="info-wrap">
                      <Link  to={`/edit/${product._id}/edit`} className="  edit-button d-flex justify-content-center align-items-center"
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



            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainProducts;
