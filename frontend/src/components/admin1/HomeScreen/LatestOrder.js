import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../LoadingError/Error";
import Loading from "../../LoadingError/Loading";
import "./Admin1.css"
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, deliverOrder } from "../../../Redux/Actions/OrderActions";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
const LatestOrder = (props) => {
  const dispatch = useDispatch();

  const { loading, error, orders } = props;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  
  

  useEffect(() => {
    dispatch(getOrderDetails);
  }, [dispatch]);
  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <div className="card-body">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (

        <div className="table-responsive">
          
           
          <Table>
      <Thead>
        <Tr style={{ background: "#4fa607" }}>
          <Th style={{ color: "black" }}>Order ID</Th>
          <Th style={{ color: "black" }}>Total Price</Th>
          <Th style={{ color: "black" }}>Order Status</Th>
          <Th style={{ color: "black" }}>Date</Th>
          <Th style={{ color: "black" }}>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
      {orders.slice(orders.length-4,orders.length-0).map((order) => (
                <tr key={order._id}>
                  <td>

                    <b>{order._id}</b>
                  </td>
                  <td>RS:{order.totalPrice}</td>
                  <td>
                    {order.isDelivered ? (
                      <div style={{ background: " #90EE90"  }}>
                        Paid AT ({" "}
                        {moment(order.isDeliveredAt).format("MMM Do YY")})
                      </div>
                    ) : (
                      <>
                        <div style={{ background: "#FFCCCB" }}>
                          Created AT ({" "}
                          {moment(order.createdAtt).format("MMM Do YY")})
                        </div>
                      </>
                    )}
                  </td>

                  <td>{moment(order.createdAt).format("MMM Do YY")}</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/adminorder/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
        
      </Tbody>
    </Table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
