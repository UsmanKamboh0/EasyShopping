import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import logo from '../imgs/theme/logo.svg';
import logo1 from "../../src/components/admin1/HomeScreen/logo1.png";
import logo from "../../src/components/admin1/HomeScreen/logo.png";
import Account from '../imgs/theme/icons/icon-user.svg'

import Search from '../components/Search'
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
import carts from '../assets/imgs/theme/icons/icon-cart.svg'

import { NavLink } from "react-router-dom";
import ShopSection from "./homeComponents/ShopSection";
import { Helmet } from "react-helmet";
import UserOption from "./UserOption";

const Header = () => {
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
			{/* 1st logo part  */}


			{/* 2nd menu part  */}

			<header className=" header-style-1 header-height-2">
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

									<img src={logo} />

								</Link>



							</div>
							<div className="header-nav d-none d-lg-flex">

								{/* <div class="main-categori-wrap d-none d-lg-block">
                                    <a class="categories-button-active" href="index.html">Home
                                      
                                    </a>

                                </div> */}

								<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">

									
<nav>

										<ul>
											{/* <li class="hot-deals"><img src="assets/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href="shop-grid-right.html">Deals</a></li> */}
											<li  className="active">


												<NavLink to="/easyshopping">
													Home
												</NavLink>
											</li>
										</ul>
										</nav>
								</div>
							</div>
							<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
								<nav>
									<ul>
										<li  className="active">
										<NavLink to="/products" >
													Products
												</NavLink>
											
										</li>
									</ul>
								</nav>

							</div>


							<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
								<nav>
									<ul>
										<li  className="active">
										<NavLink to="/WomenProducts">
										Women&nbsp;Collection
												</NavLink>
										
										</li>
									</ul>
								</nav>

							</div>
							<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
								<nav>
									<ul>
										<li  className="active">
										<NavLink to="/MenProducts" >
										Men&nbsp;Collection
												</NavLink>
											


										</li>
									</ul>
								</nav>

							</div>
							<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
								<nav>
									<ul>
										<li  className="active">
										<NavLink to="/ChildrensProducts">
										Kids&nbsp;Collection												</NavLink>
											


										</li>
									</ul>
								</nav>

							</div>
							<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
								<nav>
									<ul>
										<li  className="active">
										<NavLink to="/contact">
										Contact&nbsp;us											</NavLink>
											
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
										


										<div className="header-action-icon-2 mini-cart-icon" >
											<Link to="/cart">
													<img src={carts}  />
													<span className="pro-count blue">
														{cartItems.length}
													</span>
											
											</Link>
											<Link to="/cart">
												
													<span className="lable">

													</span>

											</Link>
										</div>

										<UserOption />
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

export default Header;