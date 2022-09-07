import React, { useEffect } from "react";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
// import Orders1 from "../Orders/Order";
import Order1 from "./Order1";
import { useSelector, useDispatch } from "react-redux";
// import { listOrders } from "../../src/Redux/Actions/OrderActions";
import { listMyOrders } from "../../src/Redux/Actions/OrderActions";
import { getUserDetails } from "../../src/Redux/Actions/userActions";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const MyOrders = () => {
    const dispatch = useDispatch();

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading, error, orders } = orderListMy;
  const { user } = useSelector((state) => state.userDetails);
  useEffect(() => {

    dispatch(listMyOrders());
    dispatch(getUserDetails());
  }, [dispatch]);
  return (
    <>
     <Header/>
     <hr></hr>
    <MobileMenu/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">{user.name}</h2><h3 > Orders</h3>
      </div>

      <div className="card mb-4 shadow-sm">
        
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Order1 orders={orders} />
            )}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default MyOrders;
