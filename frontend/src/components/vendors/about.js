import React from 'react'
import Header from '../Header'
import { Link } from "react-router-dom";

import contactUS from"../../screens/images/contactUS.png";
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
const about = () => {
  return (
<>
<Header/>
<MobileMenu/>
<div className="contant">
<div className="inner-banner1"></div>
                <Link to="/contact" >
                    <img src={contactUS} />
                </Link>
    
        <div className="pt-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="add-map pb-100">
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin" height="585" style="border:0;width:100%;" allowfullscreen></iframe> */}
                </div>
                <div className="pb-100">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-box mb-sm-20">
                        <ul>
                          <li>
                            <div className="contact-thumb">
                              <img src="images/address-icon.svg" alt="xpoge"/>
                            </div>
                            <div className="contact-box-detail">
                              <h4 className="contact-title">Visit Office</h4>
                              <p>869 Lexington Ave, New York, NY 10065, USA</p>
                            </div>
                          </li>
                          
                          <li>
                            <div className="contact-thumb">
                              <img src="images/mail-icon.svg" alt="xpoge"/>
                            </div>
                            <div className="contact-box-detail">
                              <h4 className="contact-title">Email</h4>
                              <p>xpoge@hi123.com</p>
                            </div>
                          </li>
                          <li>
                            <div className="contact-thumb">
                              <img src="images/phone-icon.svg" alt="xpoge"/>
                            </div>
                            <div className="contact-box-detail">
                              <h4 className="contact-title">Call Us</h4>
                              <p>+91 123 456 789 0</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="heading-part mb-30">
                        <h3>Leave a message</h3>
                      </div>
                      <div className="form-detail">
                        <form className="main-form">
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="form-group">
                                  <input type="text" placeholder="Name" required=""/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="form-group">
                                  <input type="text" placeholder="Subject" required=""/>
                                </div>
                              </div>
                              <div className="col-lg-4 col-12">
                                <div className="form-group">
                                  <input type="text" placeholder="Email" required=""/>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea placeholder="Message" rows="4" required=""></textarea>
                              </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn-color">Send Massage</button>
                              </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <br></br>
</>

)
}

export default about