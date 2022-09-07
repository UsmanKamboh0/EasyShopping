import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { MlistProduct } from "../../Redux/Actions/MenAction";
import { WlistProduct } from "../../Redux/Actions/WomenProductAction";
import {KlistProduct} from "../../Redux/Actions/KidsAction";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import HoverImage from "react-hover-image";
import Banner1 from "./images/Banner1.png";
import bannercosmeticsfull from "./images/bannercosmeticsfull.webp";
import centerbanner from "../../screens/images/centerbanner.png";
import subbanner1 from "../../screens/images/sub-banner1.png";
import subbanner3 from "../../screens/images/sub-banner3.png";
import subbanner4 from "../../screens/images/sub-banner4.png";
import subbanner2 from "../../screens/images/sub-banner2.png";
const ShopSection = () => {
	// const { keyword, pagenumber } = props;
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;
	const WomenproductList = useSelector((state) => state.WomenproductList);
	const { wproducts } = WomenproductList;
	const KidsproductList = useSelector((state) => state.KidsproductList);
    const { kproducts } = KidsproductList;
	const MenproductList = useSelector((state) => state.MenproductList);
	const { mproducts } = MenproductList;

	useEffect(() => {
		dispatch(listProduct());
		dispatch(MlistProduct());
		dispatch(WlistProduct());
		dispatch(KlistProduct());


	}, [dispatch]);




	return (
		<>


			<div>
				<section id="banner-part" className="menu-section pb-100">

					<div className="home-slider  main-banner owl carousel" >
						<OwlCarousel items={1} margin={8} autoplay={true} >
							<div className="banner-1">

								<div ><img className="img" src={Banner1} />


									<div className="banner-detail">
										<div className="container">
											<div className="row">
												<div className="col-12">
													<div className="banner-detail-inner">
														<span className="subtitle1">Women Style</span>
														<h1 className="banner-title">Big sale</h1>
														<div className="subtitle2">
															<span className="part1">Summer</span>
															<span className="part2">Collection</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="banner-2">

								<div ><img className="img" src={bannercosmeticsfull} />


								<div className="banner-detail">
										<div className="container">
											<div className="row">
												<div className="col-12">
													<div className="banner-detail-inner">
														<span className="subtitle1">Women Style</span>
														<h1 className="banner-title">Sale</h1>
														<div className="subtitle2">
															<span className="part1">New</span>
															<span className="part2">Collection</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>


					</div>
				</section>
			</div>


			<div className="sub-banner-part pb-100">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="sub-banner-box">
								<a href="shop.html" />
								<img className="d-none d-md-block" src={subbanner1} alt="easyshopping" />
								<img className="d-block d-md-none" src={subbanner1} alt="easyshopping" />

							</div>
						</div>
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-8">
									<div className="sub-banner-box">
										<a href="shop.html" />
										<img className="d-none d-md-block" src={subbanner2} alt="easyshopping" />
										<img className="d-block d-md-none" src={subbanner2} alt="easyshopping" />

									</div>
								</div>
								<div className="col-md-4">
									<div className="sub-banner-box">
										<a href="shop.html" />
										<img className="d-none d-md-block" src={subbanner3} alt="easyshopping" />
										<img className="d-block d-md-none" src={subbanner3} alt="easyshopping" />

									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="sub-banner-box">
										<a href="shop.html" />
										<img className="d-none d-md-block" src={subbanner4} alt="easyshopping" />
										<img className="d-block d-md-none" src="images/sub-responsive-banner4.jpg" alt="easyshopping" />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="services-part" className="menu-section services-part position-r pb-100">
				<div className="container">
					<div className="ser-feature-block mb_-30 center-sm">
						<div className="row">
							<div className="col-lg-4 col-12">
								<div className="services-box mb-30">
									<div className="services-box-inner">
										<div className="services-icon services1">
											<img src="images/ser-icon1.svg" alt="easyshopping" />
										</div>
										<div className="services-detail">
											<h3 className="ser-title">Free Shipping</h3>
											<div className="ser-subtitle">Free Shipping on orders over $99</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-12">
								<div className="services-box mb-30">
									<div className="services-box-inner">
										<div className="services-icon services2">
											<img src="images/ser-icon2.svg" alt="easyshopping" />
										</div>
										<div className="services-detail">
											<h3 className="ser-title">Special Gift</h3>
											<div className="ser-subtitle">ree Shipping on orders over $99</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-12">
								<div className="services-box mb-30">
									<div className="services-box-inner">
										<div className="services-icon services3">
											<img src="images/ser-icon3.svg" alt="easyshopping" />
										</div>
										<div className="services-detail">
											<h3 className="ser-title">Money Back</h3>
											<div className="ser-subtitle">Not receiving an item applied to</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* //product */}




			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading-part text-center mb-30 mb-sm-20">
							<h2 className="main_title">Featured Products</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{products.slice(products.length-4, products.length-0).map((product) => (
						<div className="col-lg-3 col-md-4 col-6" key={product._id}>
							<div className="product-item">
								<div className="product-image">
									<div className="new-label"><span>New</span></div>



									<Link to={`/product/${product._id}`}>

										<HoverImage src={product.image1} hoverSrc={product.image2} />

									</Link>
								</div>
								<div className="product-details-outer">
									<div className="product-details">
										<div className="product-title">
											<Link to={`/product/${product._id}`}>{product.name}</Link>
										</div>
										<div className="price-box">
											<span className="price">RS  {product.price}</span>
											<del className="price old-price">RS  100.00</del>
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
					{/* Women Products */}
					{wproducts.slice(wproducts.length-6, wproducts.length-2).map((product) => (
						<div className="col-lg-3 col-md-4 col-6" key={product._id}>
							<div className="product-item">
								<div className="product-image">
									<div className="new-label"><span>New</span></div>



									<Link to={`/Wproduct/${product._id}`}>
										<HoverImage src={product.image1} hoverSrc={product.image2} />

									</Link>
								</div>
								<div className="product-details-outer">
									<div className="product-details">
										<div className="product-title">
											<Link to={`/Wproduct/${product._id}`}>{product.name}</Link>
										</div>
										<div className="price-box">
											<span className="price">RS  {product.price}</span>
											<del className="price old-price">RS  100.00</del>
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

					{/* MenProducts */}
					{mproducts.slice(mproducts.length - 4, mproducts.length - 0).map((product) => (
						<div className="col-lg-3 col-md-4 col-6" key={product._id}>
							<div className="product-item">
								<div className="product-image">
									<div className="new-label"><span>New</span></div>



									<Link to={`/Mproduct/${product._id}`}>

										<HoverImage src={product.image1} hoverSrc={product.image2} />

									</Link>
								</div>
								<div className="product-details-outer">
									<div className="product-details">
										<div className="product-title">
											<Link to={`/Mproduct/${product._id}`}>{product.name}</Link>
										</div>
										<div className="price-box">
											<span className="price">RS  {product.price}</span>
											<del className="price old-price">RS  100.00</del>
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
					{/* MenProducts */}
					{kproducts.slice(mproducts.length - 4, mproducts.length - 0).map((product) => (
						<div className="col-lg-3 col-md-4 col-6" key={product._id}>
							<div className="product-item">
								<div className="product-image">
									<div className="new-label"><span>New</span></div>



									<Link to={`/Kproduct/${product._id}`}>

										<HoverImage src={product.image1} hoverSrc={product.image2} />

									</Link>
								</div>
								<div className="product-details-outer">
									<div className="product-details">
										<div className="product-title">
											<Link to={`/Kproduct/${product._id}`}>{product.name}</Link>
										</div>
										<div className="price-box">
											<span className="price">RS  {product.price}</span>
											<del className="price old-price">RS  100.00</del>
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
					<div className="row">
						<div className="col-12">
							<div className="align-center">
								<Link to={`/Products/`}>
									<div className="btn btn-color">See more Products</div></Link>
							</div>
						</div>
					</div>
				</div>

			</div>
			{/* Product end  */}
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Link to="/products">
				<img src={centerbanner} /></Link>

			<section className=" testimonial-section position-r ptb-100">


				<div className="container">
					<div className="col-12">
						<div className="heading-part text-center mb-30 mb-sm-20">
							<h2 className="main_title">Testimonial</h2>
							<br></br>

						</div>

					</div>
					<div className="row">

						<div className="team-inner testimonial-slider  ">


							<OwlCarousel items={1} margin={8} autoplay={true} >
								<div className="item testimonial-main">
									<div className="client-img-main">

										<div className="client-img">

											<img className="img" src={'images/testimonial_img1.jpg'} alt="usman" />
											<div className="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div className="clear-fix"></div>
									<div className="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 className="sub-title client-title">- john Doe - </h4>
										<div className="designation">Founder</div>
									</div>
								</div>
								{/* first testimonial end */}
								<div className="item testimonial-main">
									<div className="client-img-main">

										<div className="client-img">

											<img className="img" src={'images/testimonial_img2.jpg'} alt="usman" />
											<div className="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div className="clear-fix"></div>
									<div className="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 className="sub-title client-title">- john Doe - </h4>
										<div className="designation">Founder</div>
									</div>
								</div>
								<div className="item testimonial-main">
									<div className="client-img-main">

										<div className="client-img">

											<img className="img" src={'images/testimonial_img3.jpg'} alt="usman" />
											<div className="quote-img">
												<img className="img" src={'images/quote-img.png'} alt="usman" />

											</div>
										</div>
									</div>
									<div className="clear-fix"></div>
									<div className="client-detail">
										<p>make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimen book. It has survived not only five centuries.</p>
										<h4 className="sub-title client-title">- john Doe - </h4>
										<div className="designation">Founder</div>
									</div>
								</div>



							</OwlCarousel>
						</div>
					</div>

				</div>


			</section>
			<br></br>

			<div className="brand-part pb-100">
				<div className="container">
					<div className="brand-part-inner">
						<div className="row">
							<div className="brand-salider brand-slider ">

								<OwlCarousel items={6} margin={1} autoplay={true} >

									<div className="item">
										<img src="images/brand-img1.png" alt="brand-img" />
									</div>
									<div className="item">
										<img src="images/brand-img2.png" alt="brand-img" />
									</div>
									<div className="item">
										<img src="images/brand-img3.png" alt="brand-img" />
									</div>
									<div className="item">
										<img src="images/brand-img4.png" alt="brand-img" />
									</div>
									<div className="item">
										<img src="images/brand-img5.png" alt="brand-img" />
									</div>
									<div className="item">
										<img src="images/brand-img6.png" alt="brand-img" />
									</div>


								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			</>
			);
};

			export default ShopSection;
