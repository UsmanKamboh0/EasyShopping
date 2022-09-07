import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Message from "../components/LoadingError/Error";
// import Loading from "../components/LoadingError/Loading";
// import Header from "./../components/Header";
import { login ,clearErrors} from "../../Redux/Actions/userActions";
import Message from "../../components/LoadingError/Error";

// import "./Login.css";
const LoginSignUp = ({ history, location }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();

  const { error,userInfo, loading, isAuthenticated } = useSelector(
    (state) => state.userLogin
  );
 

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  

  

  const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

  
 

  return (
   <>
    {error && <Message variant="alert-danger">{error}</Message>}
    {/* {loading && <Loading />} */}
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p>LOGIN</p>
                </div>
              </div>
              <form className="loginForm" onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              
            </div>
          </div>
          </>
  );
};

export default LoginSignUp;
