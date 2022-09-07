import React from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import PostAddIcon from "@material-ui/icons/PostAdd";
import logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Admin1.css";
const Sidebar = () => {
  return (
    <div>

      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src={logo}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>



        <nav>

          <ul className="menu-aside">
          <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link "
                to="/admindashboard"
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <div className="dropdown">
                <NavLink
                  activeClassName="active"
                  className="menu-link"
                  to="/adminproducts"
                  exact={true}
                >
                  <i className="icon fas fa-shopping-bag"></i>
                  <span className="text">All Products</span>
                </NavLink>
                <div className="dropdown-content">

                  <NavLink to="/adminmenproducts"    activeClassName="active"
                  className="menu-link"
                
                  exact={true} ><i className="icon fas fa-shopping-bag"></i>
                    <span className="text">Men Products</span> </NavLink>
                  <NavLink to="/adminwomenproducts" activeClassName="active"className="menu-link"
                exact={true}><i className="icon fas fa-shopping-bag"></i>
                    <span className="text">Women Products</span></NavLink>
                  <NavLink to="/adminKidproducts" activeClassName="active"className="menu-link"
                exact={true}><i className="icon fas fa-shopping-bag"></i>
                    <span className="text">Kids Products</span></NavLink>


                </div>
              </div>
            </li>
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminmenproducts"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Men Products</span>
              </NavLink>
            </li> */}
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminwomenproducts"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Women Products</span>
              </NavLink>
            </li> */}

            <li className="menu-item">
              <div className="dropdown">

                <NavLink
                  activeClassName="active"
                  className="menu-link"
                  to="/adminproduct"
                >

                  <i className="icon fas fa-cart-plus "></i>
                  <span className="text">Add product</span>
                </NavLink>
                <div className="dropdown-content">

                  <Link to="/adminmenproduct" ><i className="icon fas fa-cart-plus"></i>
                    <span className="text">Add Men Products</span> </Link>
                  <Link to="/adminwomenproduct"><i className="icon fas fa-cart-plus"></i>
                    <span className="text">Add Women Products</span></Link>
                  <Link to="/kid"><i className="icon fas fa-cart-plus"></i>
                    <span className="text">Add Kids Products</span></Link>


                </div></div>
            </li>
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminmenproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add Men product</span>
              </NavLink>
            </li> */}
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminwomenproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add Women product</span>
              </NavLink>
            </li> */}
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/category"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminorders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/adminusers"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Sellers</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Transactions</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
