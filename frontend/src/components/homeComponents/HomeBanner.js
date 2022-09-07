import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import ScriptTag from 'react-script-tag';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../../src/App.css';
const HomeBanner = (s) => {
	
	return (
		<>
			<div>
				<section id="banner-part" class="menu-section pb-100">

					<div class='home-slider banner main-banner owl carousel' >
						<OwlCarousel items={1} margin={8} autoplay={true} >
							<div class="banner-1">

								<div ><img className="img" src={'images/banner1.jpg'} />


									<div class="banner-detail">
										<div class="container">
											<div class="row">
												<div class="col-12">
													<div class="banner-detail-inner">
														<span class="subtitle1">Women Style</span>
														<h1 class="banner-title">Big sale</h1>
														<div class="subtitle2">
															<span class="part1">Summer</span>
															<span class="part2">Collection</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="banner-2">

								<div ><img className="img" src={'images/banner2.jpg'} />


									<div class="banner-detail">
										<div class="container">
											<div class="row">
												<div class="col-12">
													<div class="banner-detail-inner">
														<span class="subtitle1">Up to 40% Off</span>
														<h1 class="banner-title">Men Suit</h1>
														<div class="subtitle2">
															<span class="part1">New</span>
															<span class="part2">Collection</span>
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
            <div class="sub-banner-part pb-100">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="sub-banner-box">
								<a href="shop.html" />
								<img class="d-none d-md-block" src="images/sub-banner1.jpg" alt="Xpoge" />
								<img class="d-block d-md-none" src="images/sub-responsive-banner1.jpg" alt="Xpoge" />

							</div>
						</div>
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-8">
									<div class="sub-banner-box">
										<a href="shop.html" />
										<img class="d-none d-md-block" src="images/sub-banner2.jpg" alt="Xpoge" />
										<img class="d-block d-md-none" src="images/sub-responsive-banner2.jpg" alt="Xpoge" />

									</div>
								</div>
								<div class="col-md-4">
									<div class="sub-banner-box">
										<a href="shop.html" />
										<img class="d-none d-md-block" src="images/sub-banner3.jpg" alt="Xpoge" />
										<img class="d-block d-md-none" src="images/sub-responsive-banner3.jpg" alt="Xpoge" />

									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="sub-banner-box">
										<a href="shop.html" />
										<img class="d-none d-md-block" src="images/sub-banner4.jpg" alt="Xpoge" />
										<img class="d-block d-md-none" src="images/sub-responsive-banner4.jpg" alt="Xpoge" />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="services-part" class="menu-section services-part position-r pb-100">
				<div class="container">
					<div class="ser-feature-block mb_-30 center-sm">
						<div class="row">
							<div class="col-lg-4 col-12">
								<div class="services-box mb-30">
									<div class="services-box-inner">
										<div class="services-icon services1">
											<img src="images/ser-icon1.svg" alt="xpoge" />
										</div>
										<div class="services-detail">
											<h3 class="ser-title">Free Shipping</h3>
											<div class="ser-subtitle">Free Shipping on orders over $99</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-12">
								<div class="services-box mb-30">
									<div class="services-box-inner">
										<div class="services-icon services2">
											<img src="images/ser-icon2.svg" alt="xpoge" />
										</div>
										<div class="services-detail">
											<h3 class="ser-title">Special Gift</h3>
											<div class="ser-subtitle">ree Shipping on orders over $99</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-12">
								<div class="services-box mb-30">
									<div class="services-box-inner">
										<div class="services-icon services3">
											<img src="images/ser-icon3.svg" alt="xpoge" />
										</div>
										<div class="services-detail">
											<h3 class="ser-title">Money Back</h3>
											<div class="ser-subtitle">Not receiving an item applied to</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			
			
			
		</>
	);
};

export default HomeBanner;
