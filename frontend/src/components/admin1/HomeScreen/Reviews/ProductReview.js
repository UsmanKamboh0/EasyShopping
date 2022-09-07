import React, { Fragment, useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import "./productReviews.css";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getAllReviews,
    deleteReviews,
    getProductDetails,

} from "../../../../Redux/Actions/ProductActions";
// import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import DeleteIcon from "@material-ui/icons/Delete";
import Star from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

import SideBar from "../Sidebar";
import { DELETE_REVIEW_RESET } from "../../../../Redux/Constants/ProductConstants";
import { DataGridPro } from "@mui/x-data-grid-pro";

const ProductReviews = ({ history }) => {
    const dispatch = useDispatch();

    //   const alert = useAlert();

    const { error: deleteError, isDeleted } = useSelector(
        (state) => state.review
    );

    const { error, reviews, loading } = useSelector(
        (state) => state.productReviews
    );
    const { product } = useSelector(
        (state) => state.productDetails
    );

    const [productId, setProductId] = useState("");

    const deleteReviewHandler = (reviewId) => {
        dispatch(deleteReviews(reviewId, productId));
    };

    const productReviewsSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getAllReviews(productId));
        dispatch(getProductDetails(productId));

    };

    useEffect(() => {
        if (productId.length === 24) {
            dispatch(getAllReviews(productId));
        }
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert("Review Deleted Successfully");
            dispatch({ type: DELETE_REVIEW_RESET });
        }

    }, [dispatch, alert, error, deleteError, history, isDeleted, productId]);




    return (
        <Fragment>
            {/* <MetaData title={`ALL REVIEWS - Admin`} /> */}
            <div className="dashboard">
                {/* <SideBar /> */}
                <div className="productReviewsContainer">
                    <form
                        className="productReviewsForm"
                        onSubmit={productReviewsSubmitHandler}
                    >
                        <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>

                        <div>
                            <Star />
                            <input
                                type="text"
                                placeholder="Product Id"
                                required
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                            />
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submits"
                            disabled={
                                loading ? true : false || productId === "" ? true : false
                            }
                        >
                            Search
                        </Button>
                    </form>

                </div>
            </div>

            {/* <div class="items-Review">
                <div class="comment-part">
                    <h3 class="head-three">03 Comments</h3>
                    
                    <ul class="comment-list mt-30">
                        <li>
                            <div className="comment-user">
                                <img src={product.image} alt={product.name} />

                            </div>





                            {reviews.map((review) => (

                                <div class="">

                                    <span class="commenter">
                                        <span>{review.name}</span> (05 Jan 2020)</span>
                                    <Button
                                        onClick={() =>
                                            deleteReviewHandler((review._id))
                                        }
                                    >


                                        <a class="reply-btn btn btn-color small"><DeleteIcon /></a>
                                    </Button>

                                    <div class="comment-detail">

                                        <p> {review.comment}</p>





                                    </div>



                                </div>

                            ))}
                            <div class="clearfix"></div>



                        </li>

                    </ul>
                </div>

            </div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="dashboard">
        {/* <MetaData title="Products List" /> */}
        {/* <Typography component="h1">Products</Typography> */}

        {/* <Sidebar /> */}

        <div className="row">
          <div className="content-header1">
            <h2 className="content-title1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Products</h2>
          
          </div>




          <br></br>



          <section className="">

            <div className="card-body">
              {/* {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )} */}

              {/* <Message variant="alert-danger">{error}</Message> */}

              <div className="row">
              <div class="items-Review">
                <div class="comment-part">
                    <h3 class="head-three">03 Comments</h3>
                    
                    <ul class="comment-list mt-30">
                        <li>
                            <div className="comment-user">
                                <img src={product.image} alt={product.name} />

                            </div>





                            {reviews.map((review) => (

                                <div class="">

                                    <span class="commenter">
                                        <span>{review.name}</span> (05 Jan 2020)</span>
                                    <Button
                                        onClick={() =>
                                            deleteReviewHandler((review._id))
                                        }
                                    >


                                        <a class="reply-btn btn btn-color small"><DeleteIcon /></a>
                                    </Button>

                                    <div class="comment-detail">

                                        <p> {review.comment}</p>





                                    </div>



                                </div>

                            ))}
                            <div class="clearfix"></div>



                        </li>

                    </ul>
                </div>

            </div>
                
              </div>



            </div>
          </section>
        </div>
      </div>
        </Fragment>
    );
};

export default ProductReviews;
