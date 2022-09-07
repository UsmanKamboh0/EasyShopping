import React, { useState, useRef, useEffect } from 'react'
import Header from "./../components/Header";
import MobileMenu from "./../components/MobileMenu";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import HomeBanner from "../components/homeComponents/HomeBanner";
import Header1 from "../components/Header1";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  
  return (
    <div>
         

      <MobileMenu/>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      {/* <CalltoActionSection /> */}
      <ContactInfo />
      <Footer />
      
      <br></br>
      
    </div>
  );
};

export default HomeScreen;
