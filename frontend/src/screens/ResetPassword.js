import React, { Fragment, useState, useEffect } from "react";
// import "./ResetPassword.css";
// import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../Redux/Actions/userActions";
// import { useAlert } from "react-alert";
import MetaData from "./MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Message from "../components/LoadingError/Error";
import Header from "./../components/Header";
import Alert from '@mui/material/Alert';
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const ResetPassword = ({ history, match }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Password Updated Successfully");

      history.push("/login");
    }
  }, [dispatch, error, alert, history, success]);


  return (
    
   

      <Fragment>
     <Header />
     <MobileMenu/>
     <br></br>
   
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      {error && <Message variant="alert-danger">{error}</Message>}
      {success && <Message variant="alert-success">Successfully
      </Message>}


        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={resetPasswordSubmit}
        >
          <input
                  
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
          <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
          
          <button type="submit">Reset Password</button>
         
        </form>
   
        
 </div>
 
 <Footer/>
 <br></br>
    </Fragment>
    
  );
};

export default ResetPassword;
