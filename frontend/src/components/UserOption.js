import { Link, useHistory } from "react-router-dom";
import Account from '../imgs/theme/icons/icon-user.svg'
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import UserDetail from "./UserDetail";
import { getUserDetails,login } from "../Redux/Actions/userActions";
import React, { useEffect } from "react";
import "./UserOption.css";
const UserOption = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
    const {  user } = useSelector((state) => state.userDetails);

    const dispatch = useDispatch();
 const logoutHandler = () => {
		dispatch(logout());

	};
    
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
    return (
        <>
        <UserDetail user={user} cartItems={cartItems} />
            
        </>
    )
}

export default UserOption