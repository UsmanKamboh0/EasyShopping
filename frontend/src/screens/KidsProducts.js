import Header from '../components/Header'
import ReactPaginate from 'react-paginate';
import HoverImage from "react-hover-image";

import { useDispatch, useSelector } from "react-redux";
import {
    // listProduct,
    KlistProduct,
    KidMenReview
} from "../Redux/Actions/KidsAction";
import React, { useEffect, useState } from "react";
import logo from '../imgs/theme/logo.svg';
import wpic from "./images/women.png"
import womenAdd from "./images/Women-Add.png"



import { Link } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import Pagination from "react-js-pagination";
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
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Kidbanner from "./images/Kidbanner.png"
const KidsProducts = ({ match }) => {
    const categories = [
        "Sale",
        "Clothing",
      
        "Shoes",
        "Accessories",
        "Collection",
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const KidsproductList = useSelector((state) => state.KidsproductList);
    const { loading, error, kproducts, productsCount, resultPerPage, filteredProductsCount } = KidsproductList;
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };
    const { success, error: reviewError } = useSelector(
        (state) => state.newKidReview
    );
    const keyword = match.params.keyword;
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

  
    useEffect(() => {
        dispatch(KlistProduct(keyword, currentPage, price, category));
    }, [dispatch, currentPage, keyword, price, category]);

    let count = filteredProductsCount;
   
    return (

      
             
          
           
        <>
        
        
        <Header />
            <MobileMenu />
            


            {/* <!-- Product list contant start --> */}
            <div className="">
                <div className="inner-banner1"></div>
                <Link to="/WomenProducts" >
                    <img src={Kidbanner} />
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

                                    <Link to="/WomenProducts" >
                                        <img src={womenAdd} alt="Easy shopping" />
                                    </Link>










                                </div>

                            </div>
                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="shorting mb-30">

                                    <div className="row" >
                                        <div className="col-lg-6">
                                            <div className="view">
                                                <div className="list-types grid active "> <Link to="/WomenProducts" >
                                                    <div className="grid-icon list-types-icon"></div>
                                                </Link> </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="product-section grid-view">




                                    <div className="row" >
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
                                                                    <a href="cart.html">
                                                                        <span></span>
                                                                    </a>
                                                                </li>
                                                                <li className="icon wishlist-icon">
                                                                    <a href="wishlist.html">
                                                                        <span></span>
                                                                    </a>
                                                                </li>
                                                                <li className="icon compare-icon">
                                                                    <a href="#">
                                                                        <span></span>
                                                                    </a>
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

            <Footer />
            <br></br>

        </>

        

    )
}

export default KidsProducts
