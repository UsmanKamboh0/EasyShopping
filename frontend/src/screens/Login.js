import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import MobileMenu from "../components/MobileMenu";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import "./Login.css";
import loginpic from "../screens/images/login.png"
const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/profile";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Header />
      <MobileMenu/>
  
    <div className="inner-banner1">
                
                <img src={loginpic}/></div>
                <br></br>
                <br></br>
                <br></br>
      <div className="container d-flex flex-column justify-content-center align-items-center  ">
      
                
        <form
        
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              to={`/forgotpassword`}
            >
              Forgot Password
            </Link>
          </p>
        </form>
      </div>
      <Footer/>
      <br></br>
    </>
  );
};

export default Login;
