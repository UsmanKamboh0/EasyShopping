import React, { useEffect } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./Order.css";
import { getOrderDetails,deliverOrder } from "../../Redux/Actions/OrderActions";

import Loading from "../../components/LoadingError/Loading";
import Message from "../../components/LoadingError/Error";
import moment from "moment";

const UserOrderDetailmain = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    
 
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-primary text-white">
          Back To Orders
        </Link>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="card">
         
          <div className="card-body">
            Order info
            <OrderDetailInfo order={order} />

            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Info */}
              
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default UserOrderDetailmain;
