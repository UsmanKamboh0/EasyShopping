import React, { useEffect } from "react";
import OrderDetailProducts from "../../src/components/admin1/HomeScreen/Orders/OrderDetailProducts";
import OrderDetailInfo from "../../src/components/admin1/HomeScreen/Orders/OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
import { getOrderDetails,deliverOrder } from "../Redux/Actions/OrderActions";

import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import moment from "moment";

const OrderDetails = (props) => {
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
    <br></br>
    <br></br>
    <section className="content-main">
      <div className="content-header">
        <Link to="/adminorders" className="btn btn-primary text-white">
          Back To Orders
        </Link>
      </div>

        <div className="card">
         
          <div className="card-body">
            Order info
            {/* <OrderDetailInfo order={order} /> */}

            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  {/* <OrderDetailProducts order={order} loading={loading} /> */}
                </div>
              </div>
              {/* Payment Info */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  {/* {order.isDelivered ? (
                    <button className="btn btn-primary col-12">
                      DELIVERED AT ({" "}
                      {moment(order.isDeliveredAt).format("MMM Do YY")})
                    </button>
                  ) : (
                    <>
                      {loadingDelivered && <Loading />}
                      <button
                        onClick={deliverHandler}
                        className="btn btn-primary col-12"
                      >
                        MARK AS DELIVERED
                      </button>
                     
                    </>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
};

export default OrderDetails;
