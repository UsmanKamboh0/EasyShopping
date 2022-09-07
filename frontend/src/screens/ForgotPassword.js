import React, {createContext, Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error";

import { clearErrors, forgotPassword } from "../Redux/Actions/userActions";
import MetaData from "./MetaData";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Alert from '@mui/material/Alert';
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      
    }

    if (message) {
     
    }
  }, [dispatch, error, Alert, message]);

  return (
    <Fragment>
     <Header />
     <MobileMenu/>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      {error && <Message variant="alert-danger">{error}</Message>}
      {message && <Message variant="alert-success">{message}</Message>}

        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={forgotPasswordSubmit}
        >
          <input
             type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
          />
          
          <button type="submit">Forgot Password</button>
         
        </form>
      </div>
      <Footer/>
      <br></br>
    </Fragment>
  );
};

export default ForgotPassword;


