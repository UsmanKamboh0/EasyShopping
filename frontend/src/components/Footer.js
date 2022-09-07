import React from "react";

import logo from "../../src/components/admin1/HomeScreen/logo.png";
import { Link } from "react-router-dom";
import iconemail from "../imgs/theme/icons/iconemail.svg";
import phone from '../imgs/theme/icons/icon-headphone.svg'

const Footer = () => {
  return (
    <>
    {/* <!-- Footer section start --> */}
			<footer className="footer-part">
				<div className="container">
					<div className="footer-top ptb-100">
						<div className="mb_-30">
							<div className="row">
								<div className="col-12 col-lg-3 col-md-6">
									<div className="footer-about mb-sm-30">
										<div className="footer-logo">
											<img  src={logo}/>
										</div>
										<p className="footer-p">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh mauris sit amet nibh. Donec sodales sagittis</p>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-6">
									<div className="footer-static-block">
										<span className="opener plus"></span>
										<h3 className="head-three">Information</h3>
										<ul className="footer-menu footer-block-contant">

											<li><Link to="/contact">Contact Us</Link></li>
											<li><a>Brands</a></li>
											<li><a >Blog</a></li>
											<li><a >Returns</a></li>
											<li><a>Privacy Policy</a></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-6">
									<div className="footer-static-block">
										<span className="opener plus"></span>
										<h3 className="head-three">My Account</h3>
										<ul className="footer-menu footer-block-contant">
											<li><Link to="orders">Order History</Link></li>
											<li><a >Wish List</a></li>
											<li><a >Newsletter</a></li>
											<li><a >Specials</a></li>
											<li><a >Gift Certificates</a></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-6">
									<div className="footer-static-block">
										<span className="opener plus"></span>
										<h3 className="head-three">Contact us</h3>
										<div className="contact-box footer-block-contant">
				                			<ul>
				                				<li>
				                					<div className="contact-thumb">
													<img src="https://img.icons8.com/material-outlined/24/000000/marker.png" />
				                					</div>
				                					<div className="contact-box-detail">
				                						<p>Ahmad Park Manthar Road Rahim Yar Khan</p>
				                					</div>
				                				</li>
				                				<li>
				                					<div className="contact-thumb">
													<img src={phone} alt="Easy-Shopping" />
				                					</div>
				                					<div className="contact-box-detail">
													<a>(+92) 3043290239</a>
				                					</div>
				                				</li>
				                				<li>
				                					<div className="contact-thumb">
													<img src={iconemail}  />
				                					</div>
				                					<div className="contact-box-detail">
				                						<p>Easyshopping@hi123.com</p>
				                					</div>
				                				</li>
				                			</ul>
				                		</div>
				                	</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom align-center">
						<div className="row">
							<div className="col-12">
								<div className="w-100">
									<p className="mb-0">© Easyshopping all Rights Reserverd theme by <Link to="/" target="_blank" title="TemplatesCoder">Easy Shopping  </Link></p>
								</div>
							</div>
							<div className="col-12">
								<div className="social-media">
									<ul>
										<li><a ><i className="fa fa-facebook"></i></a></li>
										<li><a ><i className="fa fa-twitter"></i></a></li>
										<li><a ><i className="fa fa-instagram"></i></a></li>
										<li><a ><i className="fa fa-youtube"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- Footer section end --> */}
           
    </>
  );
};

export default Footer;
