import React, { Fragment } from "react";
import "./CartItemCard.css";
import "./cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart} from "../Redux/Actions/cartActions";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from '../components/MobileMenu';
import Footer from "../components/Footer";

const CartScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const removeFromCartHandle = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
    <Fragment>
    <MobileMenu />

      <Header/>
    
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <div className="col-md-6 d-flex justify-content-center mt-3 mt-md-0">
                  <button ><Link to="/products">View Products</Link></button>
                </div>
          
        </div>
      ) : (
      
      
        <>
     
    
     
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item,i) => (
              <div className="cart-iterm row" key={i}>
                <div 
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >

                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/product/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column ">
                  <h6>QUANTITY</h6>
                  <div className="custom-qty">
                  {item.quantity}
                  </div>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRICE</h6>
                  <h4>Rs {item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
                  <div className="total">
                    <span className="sub">total:</span>
                    <span className="total-price">   <p>{`Rs  ${cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}`}</p></span>
                  </div>
                  <hr />
                  <div className="cart-buttons d-flex align-items-center row">
                    <Link to="/" className="col-md-6 ">
                      <button>Continue To Shopping</button>
                    </Link>

                    <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                      <Link to="/shipping" className="col-md-6 ">
                        <button >Checkout</button>              </Link>
                    </div>

                  </div>
                </>
              )}
            </div>
          </>
        )}
        <br></br>
      
      
    </Fragment>
    
<Footer/>
<br></br>
    </>

    
  );
};

export default CartScreen;


