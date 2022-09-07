import React, { useEffect } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link,  useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Order.css";
import {   deleteOrder,
  getOrderDetails,deliverOrder,clearErrors } from "../../../../Redux/Actions/OrderActions";
import { DELETE_ORDER_RESET } from "../../../../Redux/Constants/OrderConstants";


import Loading from "../../../LoadingError/Loading";
import Message from "../../../LoadingError/Error";
import moment from "moment";

const OrderDetailmain = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("Order Deleted Successfully");
      history.push("/adminorders");

      dispatch({ type: DELETE_ORDER_RESET });
    }
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered,alert, error, deleteError, history, isDeleted]);

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
              <div className="col-lg-9">
                <div className="table-responsive">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Info */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  {order.isDelivered ? (
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
                  )}
                  <br></br>
                  <br></br>
                  <button
                         onClick={() =>
                          deleteOrderHandler(orderId)
                        }
                        className="btn btn-primary col-12"
                      >
                       Delete
                      </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default OrderDetailmain;
