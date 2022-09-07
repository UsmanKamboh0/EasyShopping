import React, { Fragment, useState } from "react";
import "./CartItemCard.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../Redux/Actions/cartActions";
import MetaData from "./MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
// import { useAlert } from "react-alert";
import CheckoutSteps from "../components/cart/CheckoutSteps";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      alert("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    history.push("/confrimorder");
  };

  return (
    <Fragment>
      <MobileMenu/>
      <Header/>
           <MetaData title="Shipping Details" />
      <CheckoutSteps activeStep={0} />
<div className="container d-flex justify-content-center align-items-center login-center">
        <form
        className="Login col-md-8 col-lg-4 col-11"
        encType="multipart/form-data"
        onSubmit={shippingSubmit}
         
        >
          <h3>DELIVERY ADDRESS</h3>
     
          <input
          
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
          <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
                <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
              <br></br>
              <br></br>
              <div>
            

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <br></br>
            
            {country && (
              
              <div>

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <button type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}>Continue</button>
              
            
        </form>
      </div>


      
    <br></br>
   
    <Footer/>
    </Fragment>
  );
};


export default ShippingScreen;
