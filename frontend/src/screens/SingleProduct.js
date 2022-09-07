import React, { Fragment, useEffect, useState } from "react";
import Header from "./../components/Header";
import Ratings from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "./ReviewCard.js";
import { Player } from "video-react";
import { addItemsToCart } from "../Redux/Actions/cartActions";
import shopdetail from "./images/shopdetail.png";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import {
  createProductReview,
  getProductDetails,
  listProductDetails,
  newReview,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { NEW_REVIEW_RESET, NEW_REVIEW_SUCCESS } from "../Redux/Constants/ProductConstants";
import { Rating } from "@material-ui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import moment from "moment";
import MetaData from "./MetaData";
import Carousel from "react-material-ui-carousel";
import store from "../Redux/store";
import "./SingleProduct.css";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
const SingleProduct = ({ match }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue) => {
    setValue(newValue);
  };
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_SUCCESS });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);

  return (
 <>
      <Header />
<MobileMenu/>
      <div className="">
      <div className="inner-banner1"></div>
                <Link to="/WomenProducts" >
                    <img src={shopdetail} />
                </Link>
        <div className="ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="align-center mb-md-30">
                <Carousel>

<img
  className=""
  src={product.image1} />
<img className="" src={product.image2} />



</Carousel>
                  <ul id="glasscase" className="gc-start">
                  
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-12">
                <div className="product-detail-main">
                  <div className="product-item-details">
                    <h1 className="product-item-name">{product.name} </h1>
                    <div className="price-box"> <span className="price">RS  {product.price} </span>
                      <del className="price old-price"></del>
                    </div>
                          
                    <div className="rating-main">
                    <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
                      ({product.numOfReviews} Reviews)
                    </div>
         

        

          
   
      <button onClick={submitReviewToggle} className="submitReview">
       Be the first To Review
      </button>
                    

                    <div className="product-des">
                      {product.description}
                    </div>
                    <ul className="product-list">
                      <li><i className="fa fa-check"></i> Satisfaction 100% Guaranteed</li>
                      <li><i className="fa fa-check"></i> Free shipping on orders over $99</li>
                      <li><i className="fa fa-check"></i> 14 day easy Return</li>
                    </ul>
                    <hr className="mb-20" />
                    <div className="row">
                      <div className="col-12">
                        <div className="table-listing qty mb-20">
                          <div className="row">
                            <div className="col-xl-2 col-md-3 col-sm-12">
                              <span>Qty:</span>
                            </div>
                          
                            <div className="col-xl-10 col-md-9 col-sm-12">
                              <div className="custom-qty">
                                <button onClick={decreaseQuantity}>-</button>
                                <input readOnly type="number" className="input-text qty" value={quantity} />
                                <button onClick={increaseQuantity}>+</button>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="table-listing product-size select-arrow mb-20">
                          <div className="row">
                            <div className="col-xl-2 col-md-3 col-sm-12">
                              <span>Size:</span>
                            </div>
                            <div className="col-xl-10 col-md-9 col-sm-12">
                              <select className="selectpicker full" id="select-by-size">
                                <option select="selected" value="#">S</option>
                                <option value="#">M</option>
                                <option value="#">L</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="table-listing product-color select-arrow mb-20">
                          <div className="row">
                            <div className="col-xl-2 col-md-3 col-12">
                              <span>Color:</span>
                            </div>
                            <div className="col-xl-10 col-md-9 col-12">
                              <select className="selectpicker full" id="select-by-color">
                                <option select="selected" value="#">Blue</option>
                                <option value="#">Green</option>
                                <option value="#">Orange</option>
                                <option value="#">White</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mb-20" />
                    <div className="product-details-btn">
                      {/* <!-- detail-page-btn  --> */}
                      <ul>
                        <li className="icon cart-icon">
                          <button className="btn btn-color" onClick={addToCartHandler}>Add to cart</button>
                        </li>
                        <li className="icon wishlist-icon">
                          <a href="wishlist.html" className="btn btn-transparent"><span></span></a>
                        </li>
                        <li className="icon compare-icon">
                          <a href="#" className="btn btn-transparent"><span></span></a>
                        </li>
                      </ul>
                    </div>
                    <br></br>
            <br></br>
            <br></br>
            <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            <section className="">
                <div className="">
                  <div className="product-tab-inner">
                    <div className="">
                      <div className="">
                        <div >
                          <Box >
                            <TabContext value={value}>
                              <Box >
                                <TabList className="" onChange={handleChange} aria-label="">

                                  <Tab label="Description" value="one" />
                                  <Tab label="Tags" value="two" />
                                  <Tab label="Review" value="three" />
                                </TabList>
                              </Box>
                              <TabPanel value="one"><div className="items-Description selected">
                              {product.description}
                              </div></TabPanel>
                              <TabPanel value="two"><div className="items-Tags">
                                <p>Mauris felis neque, hendrerit id velit a, sollicitudin gravida nunc in velit lectus, varius quis pretium fermentum, faucibus vel ante etiam justo nulla, condimentum sit amet urna eget, rutrum auctor massa suspendisse sit amet odio et dui lobortis iaculis phasellus sagittis interdum neque, fermentum gravida ante maximus sed nunc lobortis bibendum elementum integer rhoncus et libero ut suscipit aliquam non ligula id dui consequat viverra a ut sem pellentesque et sapien eget lorem viverra dignissim.</p>
                              </div></TabPanel>
                              <TabPanel value="three">


                                {product.reviews && product.reviews[0] ? (
                                  <div>
                                    {product.reviews &&
                                      product.reviews.map((review) => (
                                        <ReviewCard key={review._id} review={review} />
                                      ))}
                                  </div>
                                ) : (
                                  <p className="noReviews">No Reviews Yet</p>
                                )}




                              </TabPanel>
                            </TabContext>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </section>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="submitDialog">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />

                  <textarea
                    className="submitDialogTextArea"
                    cols="30"
                    rows="5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </DialogContent>
                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={reviewSubmitHandler} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Product detail contant end --> */}
      <Footer/>
      <br></br>

    </>
  );
};

export default SingleProduct;
