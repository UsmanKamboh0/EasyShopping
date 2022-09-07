import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../src/components/admin1/HomeScreen/logo.png";
import Account from '../imgs/theme/icons/icon-user.svg'

import "./Header1.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { GiHamburgerMenu } from "react-icons/gi";
import phone from '../assets/imgs/theme/icons/icon-headphone.svg'
import facebook from '../assets/imgs/theme/icons/icon-facebook-white.svg'
import twitter from '../assets/imgs/theme/icons/icon-twitter-white.svg'
import instagram from '../assets/imgs/theme/icons/icon-instagram-white.svg'
import youtube from '../assets/imgs/theme/icons/icon-youtube-white.svg'
import pinterest from '../assets/imgs/theme/icons/icon-pinterest-white.svg'
import acount from '../imgs/theme/icons/account.svg'

import home from "../imgs/theme/icons/home.svg";
import campare from "../imgs/theme/icons/Campare.png";
import caart from "../imgs/theme/icons/cart.svg";

const MobileMenu = () => {
	const [keyword, setKeyword] = useState();
	const dispatch = useDispatch();
	let history = useHistory();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const user = useSelector((state) => state.user);

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
			<div
				className={
					showMediaIcons ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
						: "mobile-header-active mobile-header-wrapper-style"
				}>

				<div className="mobile-header-wrapper-inner">

					<div className="mobile-header-top">
						<div className="logo">
							<Link to="/">
								
									<img src={logo}

									/>
								
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

						<div className="mobile-menu-wrap mobile-header-border">
							{/* <!-- mobile menu start --> */}
							<nav>
								<ul className="mobile-menu font-heading">
									<li className="">
										<Link to="/">
											Home
										</Link>
									</li>
									<li className="menu-item-has-children">

										<Link to="/products">shop</Link>

									</li>
									<li className="menu-item-has-children">
										<Link to="/MenProducts">Men</Link>

									</li>
									<li className="menu-item-has-children">
										<Link to="/WomenProducts">Women</Link>

									</li>
									<li className="menu-item-has-children">
										<Link to="/ChildrensProducts">Kids</Link>

									</li>
									<li className="menu-item-has-children">
										<Link to="/Contact">Contact</Link>

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

									 <img src={Account} />Log In / Sign Up 
								</Link>
							</div>
							<div className="single-mobile-header-info">
								<Link to="#">
									<img src={phone} />(+92) 3043290239
								</Link>
							</div>
						</div>
						<div className="mobile-social-icon">
							<h5 className="mb-15 text-grey-4">Follow Us</h5>
							<Link to="#">
								
									<img src={facebook} />
								
							</Link>
							<Link to="#">
								
									<img src={pinterest} />
								
							</Link>
							<Link to="#">
								
									<img src={twitter} />
								
							</Link>
							<Link to="#">
								
									<img src={instagram} />
								
							</Link>
							<Link to="#">
								
									<img src={youtube} />
								
							</Link>
						</div>
					</div>
				</div>
			</div>
			<header className="header-area header-style-1 header-height-2">
             <div className="header-bottom header-bottom-bg-color sticky-bar">
					<div className="container fixed">
						<div className="header-wrap header-space-between position-relative">
							<div className="logo logo-width-1 d-block d-lg-none">
								<Link to="/">
									{/* <img src={logo} /> */}
								</Link>
							</div>




							<div className="header-action-right d-block d-lg-none">
								<div className="header-action-2">
								<div className="header-action-icon-2">
								<div className="">
								
										{/* hamburget menu start  */}
									
										<GiHamburgerMenu onClick={() => setShowMediaIcons(!showMediaIcons)}/>
									
</div>

									</div>
									<div className="header-action-icon-2">
									
									<Link to="/easyshopping">
											
												<img alt="EasyShopping" className="mini-cart-icon" src={campare} style={{color:"red"}} />
												
											
										</Link>
									</div>
									<div className="header-action-icon-2">
										<Link to="/login">
											
												<img className="svgInject" src={home} />
										</Link>

									</div>
									<div className="header-action-icon-2">
								
									<Link to="/cart">
												<img alt="EasyShopping" className="mini-cart-icon" src={caart} />
												<span className="pro-count white">{cartItems.length}</span>
											
										</Link>
									</div>
									<div className="header-action-icon-2">
									
										<Link to="/login">
												<img className="svgInject" src={acount} />
										</Link>
									</div>
									

								</div>
							</div>
						</div>
					</div>
				</div>

			</header>
		</>
	);
};

export default MobileMenu;
