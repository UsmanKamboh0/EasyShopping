import React, { Fragment, useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useHistory } from "react-router-dom";
import Account from '../imgs/theme/icons/icon-user.svg'
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { logout } from "../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";



const UserDetail = (props) => {
  const { user, cartItems } = props
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const history = useHistory();
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon className="fi fi-rs-user mr-10" />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "#3BB77E" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/admindashboard");
  }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/profile");
  }
  function cart() {
    history.push("/cart");
  }

  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");
    history.push("/");
  }
  return (

    <Fragment>
      <div className="header-action-2">

        <div className="header-action-icon-2">
          <Link to="/login">
            <img
              className="svgInject"
              src={Account}
            />
          </Link>
          <Link to="/login">
            <span className="lable ml-0">
              Account
            </span>
          </Link>
          <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
            <ul>



              {options.map((item,i) => (


                <li key={i}
                >

                  <i className="fi  mr-10"></i>


                  <button
                  
                    className="close-style1 "
                    onClick={item.func}>
                    {item.icon}{item.id} {item.name}</button>

                </li>
              ))}





            </ul>

          </div>
        </div>

      </div>

    </Fragment>


  )
}

export default UserDetail;