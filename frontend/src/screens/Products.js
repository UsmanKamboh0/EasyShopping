import Header from '../components/Header'
import { useDispatch, useSelector } from "react-redux";
import HoverImage from "react-hover-image";
import {
    listProduct,

    newReview
} from "../Redux/Actions/ProductActions";
import { WlistProduct } from '../Redux/Actions/WomenProductAction';
import Shopbanner from "./images/Shop-banner.png";
import { MlistProduct } from '../Redux/Actions/MenAction';
import {KlistProduct} from "../Redux/Actions/KidsAction";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "../components/homeComponents/Rating";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import Pagination from "react-js-pagination";
import { Rating } from "@material-ui/lab";

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "./SingleProduct.css";
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
const Products = ({ match }) => {
    const categories = [
        "Glasses",
        "Dress",
        "Tops",
        "purse",
        
        "Shoes",
        "Clothing",
        "Sale",
    
 
    "Accessories",
    "Collection",
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, productsCount, resultPerPage, filteredProductsCount } = productList;
    const MenproductList = useSelector((state) => state.MenproductList);
    const { mproducts } = MenproductList;
    const KidsproductList = useSelector((state) => state.KidsproductList);
    const { kproducts } = KidsproductList;
    const WomenproductList = useSelector((state) => state.WomenproductList);
    const { wproducts } = WomenproductList;
    const { product } = useSelector(
        (state) => state.productDetails
    );
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    const { success, error: reviewError } = useSelector(
        (state) => state.newReview
    );
    const keyword = match.params.keyword;
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
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
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    useEffect(() => {
        dispatch(listProduct(keyword, currentPage, price, category));
        dispatch(WlistProduct(keyword, currentPage, price, category));
        dispatch(MlistProduct(keyword, currentPage, price, category));
        dispatch(KlistProduct(keyword, currentPage, price, category));
    }, [dispatch, currentPage, keyword, price, category]);

    let count = filteredProductsCount;


    return (
        <>
            <MobileMenu/>
            <Header />

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

            {/* <!-- Product list contant start --> */}
            <div className="contant">
                <Link to="/Products" >
                    <img src={Shopbanner} />
                </Link>
                <div className="ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-xl-3">
                                <div className="sidebar mb-md-30">
                                    <div className="sidebar-category sidebar-default">
                                        <div className="category-content">
                                            <h2 className="cat-title">Categories</h2>

                                            <ul className="pl-0 mb-0">
                                                {categories.map((category) => (
                                                    <li
                                                        className="category-link"
                                                        key={category}
                                                        onClick={() => setCategory(category)}
                                                    >
                                                        {category}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-default">
                                        <div className="category-content">
                                            <h2 className="cat-title">Filter By</h2>

                                            <div className="mb-20">
                                                <div className="inner-title">Price</div>
                                                <ul>

                                                    <li>
                                                        <div className="check-box">
                                                            <span>
                                                                <Slider
                                                                    value={price}
                                                                    onChange={priceHandler}
                                                                    valueLabelDisplay="auto"
                                                                    aria-labelledby="range-slider"
                                                                    min={0}
                                                                    max={2500}
                                                                />
                                                            </span>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>










                                    <div className="sidebar-default sidebar-banner d-none d-lg-block">
                                        <a >
                                            <img src="images/sidebar-banner.jpg" alt="easyshopping" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="shorting mb-30">

                                    <div className="row" >
                                        <div className="col-lg-6">
                                            <div className="view">
                                                <div className="list-types grid active "> <a href="shop.html">
                                                    <div className="grid-icon list-types-icon"></div>
                                                </a> </div>
                                                <div className="list-types list"> <a href="shop-list.html">
                                                    <div className="list-icon list-types-icon"></div>
                                                </a> </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="product-section grid-view">




                                    <div className="row" >


                                        {/* slice(mproducts.length-10,mproducts.length-0). */}
                                        {products.map((product) => (

                                            <div className="col-lg-4 col-md-4 col-6" key={product._id}>
                                                <div className="product-item">
                                                    <div className="product-image">
                                                        <div className="sale-label"><span>Sale</span></div>
                                                        <Link to={`/product/${product._id}`}>
                                                        <HoverImage src={product.image1} hoverSrc={product.image2} />

                                                        </Link>
                                                    </div>
                                                    <div className="product-details-outer">
                                                        <div className="product-details">
                                                            <div className="product-title">
                                                                <Link to={`/product/${product._id}`}>
                                                                    {product.name}

                                                                </Link>
                                                            </div>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}</span>
                                                                <del className="price old-price">$100.00</del>
                                                            </div>
                                                            <div className="rating-main">


                                                                {product.reviews && product.reviews[0] ? (
                                                                    <div className="rating-summary-block">

                                                                        <div


                                                                        >

                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            ({product.numOfReviews} Reviews)                                                                                </div>
                                                                    </div>
                                                                ) : (
                                                                    <p className="noReviews">No Reviews Yet</p>
                                                                )}
                                                                <br></br>
                                                            </div>


                                                        </div>
                                                        <div className="product-details-btn">
                                                            <ul>
                                                                <li className="icon cart-icon">
                                                                  
                                                                </li>
                                                                <li className="icon wishlist-icon">
                                                                   
                                                                </li>
                                                                <li className="icon compare-icon">
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {wproducts.map((product) => (


                                            <div className="col-lg-4 col-md-4 col-6" key={product._id}>
                                                <div className="product-item">
                                                    <div className="product-image">
                                                        <div className="sale-label"><span>Sale</span></div>
                                                        <Link to={`/Wproduct/${product._id}`}>
                                                        <HoverImage src={product.image1} hoverSrc={product.image2} />

                                                        </Link>
                                                    </div>
                                                    <div className="product-details-outer">
                                                        <div className="product-details">
                                                            <div className="product-title">
                                                                <Link to={`/Wproduct/${product._id}`}>
                                                                    {product.name}

                                                                </Link>
                                                            </div>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}</span>
                                                                <del className="price old-price">$100.00</del>
                                                            </div>
                                                            <div className="rating-main">


                                                                {product.reviews && product.reviews[0] ? (
                                                                    <div className="rating-summary-block">

                                                                        <div


                                                                        >

                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            ({product.numOfReviews} Reviews)                                                                                </div>
                                                                    </div>
                                                                ) : (
                                                                    <p className="noReviews">No Reviews Yet</p>
                                                                )}
                                                                <br></br>
                                                            </div>
                                                        </div>
                                                        <div className="product-details-btn">
                                                            <ul>
                                                                <li className="icon cart-icon">
                                                                  
                                                                </li>
                                                                <li className="icon wishlist-icon">
                                                                   
                                                                </li>
                                                                <li className="icon compare-icon">
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {mproducts.map((product) => (


                                            <div className="col-lg-4 col-md-4 col-6" key={product._id}>
                                                <div className="product-item">
                                                    <div className="product-image">
                                                        <div className="sale-label"><span>Sale</span></div>
                                                        <Link to={`/Mproduct/${product._id}`}>
                                                        <HoverImage src={product.image1} hoverSrc={product.image2} />

                                                        </Link>
                                                    </div>
                                                    <div className="product-details-outer">
                                                        <div className="product-details">
                                                            <div className="product-title">
                                                                <Link to={`/product/${product._id}`}>
                                                                    {product.name}

                                                                </Link>
                                                            </div>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}</span>
                                                                <del className="price old-price">$100.00</del>
                                                            </div>
                                                            <div className="rating-main">


                                                                {product.reviews && product.reviews[0] ? (
                                                                    <div className="rating-summary-block">

                                                                        <div


                                                                        >

                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            ({product.numOfReviews} Reviews)                                                                                </div>
                                                                    </div>
                                                                ) : (
                                                                    <p className="noReviews">No Reviews Yet</p>
                                                                )}
                                                                <br></br>
                                                            </div>
                                                        </div>
                                                        <div className="product-details-btn">
                                                            <ul>
                                                                <li className="icon cart-icon">
                                                                  
                                                                </li>
                                                                <li className="icon wishlist-icon">
                                                                   
                                                                </li>
                                                                <li className="icon compare-icon">
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {kproducts.map((product) => (


                                            <div className="col-lg-4 col-md-4 col-6" key={product._id}>
                                                <div className="product-item">
                                                    <div className="product-image">
                                                        <div className="sale-label"><span>Sale</span></div>
                                                        <Link to={`/Kproduct/${product._id}`}>
                                                        <HoverImage src={product.image1} hoverSrc={product.image2} />

                                                        </Link>
                                                    </div>
                                                    <div className="product-details-outer">
                                                        <div className="product-details">
                                                            <div className="product-title">
                                                                <Link to={`/Kproduct/${product._id}`}>
                                                                    {product.name}

                                                                </Link>
                                                            </div>
                                                            <div className="price-box">
                                                                <span className="price">{product.price}</span>
                                                                <del className="price old-price">$100.00</del>
                                                            </div>
                                                            <div className="rating-main">


                                                                {product.reviews && product.reviews[0] ? (
                                                                    <div className="rating-summary-block">

                                                                        <div


                                                                        >

                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star checked"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            <span className="fa fa-star"></span>
                                                                            ({product.numOfReviews} Reviews)                                                                                </div>
                                                                    </div>
                                                                ) : (
                                                                    <p className="noReviews">No Reviews Yet</p>
                                                                )}
                                                                <br></br>
                                                            </div>
                                                        </div>
                                                        <div className="product-details-btn">
                                                            <ul>
                                                                <li className="icon cart-icon">
                                                                  
                                                                </li>
                                                                <li className="icon wishlist-icon">
                                                                   
                                                                </li>
                                                                <li className="icon compare-icon">
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                        {resultPerPage < count && (
                                        <div className="paginationBox">
                                         <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClassName="page-item"
                linkClassName="page-link"
                activeClassName="pageItemActive"
                activeLinkClassName="pageLinkActive"
              />
                                        </div>
                                    )}

                                    

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Product list contant end --> */}

<Footer/>
<br></br>
        </>

    )
}

export default Products

