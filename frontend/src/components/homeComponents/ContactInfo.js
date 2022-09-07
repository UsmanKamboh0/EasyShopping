import React from "react";
import "../css/xpoge.css";
const ContactInfo = () => {
  return (
    <>
    
			{/* // <!-- Newslatter section start --> */}
			<section className="newsletter-section align-center ptb-100">
	            <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <div className="newsletter-title">
                                <h2 className="main_title">Sign up for Newsletter </h2>
                                <p>Wants to get latest updates! sign up for Free </p>
                            </div>
                            <div className="newsletter-input">
                                <form>
                                    <div className="form-group m-0">
                                        <input type="email" placeholder="Your email address" required=""/>
                                    </div>
                                    <button type="submit" className="btn btn-color">Subscribe <i className="fa fa-send d-block d-sm-none"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
	            </div>
	        </section>
	        {/* <!-- Newslatter section end --> */}
</>
  );
};

export default ContactInfo;
