import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from '../imgs/theme/logo.svg';
import Search from '../components/Search'
import "./Header1.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { GiHamburgerMenu } from "react-icons/gi";
import Account from '../imgs/theme/icons/icon-user.svg'
import phone from '../assets/imgs/theme/icons/icon-headphone.svg'
import facebook from '../assets/imgs/theme/icons/icon-facebook-white.svg'
import twitter from '../assets/imgs/theme/icons/icon-twitter-white.svg'
import instagram from '../assets/imgs/theme/icons/icon-instagram-white.svg'
import youtube from '../assets/imgs/theme/icons/icon-youtube-white.svg'
import pinterest from '../assets/imgs/theme/icons/icon-pinterest-white.svg'
import carts from '../assets/imgs/theme/icons/icon-cart.svg'

import { NavLink } from "react-router-dom";
import ShopSection from "./homeComponents/ShopSection";
import { Helmet } from "react-helmet";

const Header1 = () => {
    const [keyword, setKeyword] = useState();
	const dispatch = useDispatch();
	let history = useHistory();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { user } =useSelector((state) => state.userDetails);
  
	const logoutHandler = () => {
		dispatch(logout());
		
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push("/");
		}
	};
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [toggleClick, settoggleClick] = useState(false);
    return (
        <>
            {/* 1st logo part  */}


            {/* 2nd menu part  */}
            <div
                className={
                    showMediaIcons ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }>

                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link to="/">
                            
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={() => setShowMediaIcons(!showMediaIcons)}

                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Search for items…"
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>

                        <div class="mobile-menu-wrap mobile-header-border">
                            {/* <!-- mobile menu start --> */}
                            <nav>
                                <ul class="mobile-menu font-heading">
                                    <li class="menu-item-has-children">
                                        <a href="index.html">Home</a>

                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="shop-grid-right.html">shop</a>

                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Men</a>

                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Women</a>

                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="blog-category-fullwidth.html">Children</a>

                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Pages</a>

                                    </li>

                                </ul>
                            </nav>
                            {/* <!-- mobile menu end --> */}
                        </div>


                        <div className="mobile-header-info-wrap mobile-header-border">

                            <div className="single-mobile-header-info mt-30">


                                <Link to="/page-contact">
                                    <img src="https://img.icons8.com/material-outlined/24/000000/marker.png" /> Our location
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link to="/page-login-register">

                                    <a> <img src={user} />Log In / Sign Up </a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link to="#">
                                    <a><img src={phone} />(+92) 3043290239</a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <Link to="#">
                                <a>
                                    <img src={facebook} />
                                </a>
                            </Link>
                            <Link to="#">
                                <a>
                                    <img src={pinterest} />
                                </a>
                            </Link>
                            <Link to="#">
                                <a>
                                    <img src={twitter} />
                                </a>
                            </Link>
                            <Link to="#">
                                <a>
                                    <img src={instagram} />
                                </a>
                            </Link>
                            <Link to="#">
                                <a>
                                    <img src={youtube} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items.
                        Only <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link to="/">
                                    <a>
                                        <img src={logo} />
                                    </a>
                                </Link>
                            </div>



                            <div class="header-nav d-none d-lg-flex">
                                <div class="main-categori-wrap d-none ">
                                    <a class="active" href="index.html">Homes
                                      
                                    </a>

                                </div>
                                {/* <div class="main-categori-wrap d-none d-lg-block">
                                    <a class="categories-button-active" href="index.html">Home
                                      
                                    </a>

                                </div> */}
                                <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>
                                        <ul>
                                            {/* <li class="hot-deals"><img src="assets/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href="shop-grid-right.html">Deals</a></li> */}
                                            
                                            <li>
                                        <a class="active" >Home </a>
                                        
                                    </li>
                                        </ul>
                                        </nav>
                                </div>
                            </div>
                           
                            <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li>
                            <a class="" href="index.html">Products</a>
                            </li>
                            </ul>
                            </nav>
                            
                            </div>
                          
                            <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li>
                            <a class="" href="index.html">Women&nbsp;Collection</a>
                            </li>
                            </ul>
                            </nav>
                            
                            </div>
                            <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li>
                            <a class="" href="index.html">Men&nbsp;Collection</a>

                            
                            </li>
                            </ul>
                            </nav>
                            
                            </div>
                            <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li>
                            <a class="" href="index.html">Childrens</a>

                            
                            </li>
                            </ul>
                            </nav>
                            
                            </div>
                            <div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li>
                            <a class="" href="index.html">Contact</a>
                            </li>
                            </ul>
                            </nav>
                            
                            </div>
                            
                           





                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">



                                        <div className="header-action-icon-2">
                                            <Link to="/cart">
                                                <a className="mini-cart-icon">
                                                    <img src={carts} />
                                                    <span className="pro-count blue">
                                                    {cartItems.length}
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link to="/cart">
                                                <a>
                                                    <span className="lable">
                                                        Cart
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="header-action-icon-2">
                                            <Link to="/login"><a>
                                                <img
                                                    className="svgInject"
                                                    src={Account}
                                                />
                                            </a></Link>
                                            <Link to="/login"><a>
                                                <span className="lable ml-0">
                                                    Account
                                                </span>
                                            </a></Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link to="/profile">
                                                            <a>
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                My Account
                                                            </a></Link>
                                                    </li>
                                                
                                               
                                                    <li>
                                                   
                                                        <Link to="#" onClick={logoutHandler} ><a>
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            Sign out
                                                        </a></Link>
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-bottom header-bottom-bg-color sticky-bar">
                    <div class="container">
                        <div class="header-wrap header-space-between position-relative">
                            <div class="logo logo-width-1 d-block d-lg-none">
                                <a href="index.html"><img src={logo} /></a>

                            </div>




                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">


                                    {/* hamburget menu start  */}
                                    <a to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                        <GiHamburgerMenu />
                                    </a>
                                </div>
                                <br></br>

                            </div>
                            <div class="header-action-right d-block d-lg-none">
                                <div class="header-action-2">
                                    <div class="header-action-icon-2">
                                    <Link to="/login">
                                        <a href="shop-wishlist.html">
                                            <img class="svgInject" src={Account} />
                                        </a>
                                        </Link>

                                    </div>
                                    <div class="header-action-icon-2">
                                    <Link to="/cart">
                                        <a class="mini-cart-icon">
                                            <img alt="Nest" src={carts} />
                                            <span class="pro-count white">{cartItems.length}</span>
                                        </a>
                                        </Link>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>


            {/* hero section  */}
            {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
           
        </>

    );
};

export default Header1;