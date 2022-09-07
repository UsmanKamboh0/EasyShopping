import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const Order1 = (props) => {
  const { orders } = props;
  return (
    <>
     <Table >
      <Thead>
        <Tr  style={{ background: "#4fa607" }}>
            
          
          <Th style={{ color: "black" }}>Order ID</Th>
          <Th style={{ color: "black" }}>Address</Th>
          <Th style={{ color: "black" }}>Total</Th>
          <Th style={{ color: "black" }}>Paid</Th>
          <Th style={{ color: "black" }}>Date</Th>
          <Th style={{ color: "black" }}>Status</Th>
          <Th scope="col" className="text-end">Action</Th>
        </Tr>
      </Thead>
      <Tbody>
      {orders.map((order) => (
              <tr key={order._id}>

                <td>{order._id}</td>
                <td>{order.shippingInfo.address}</td>
                <td >Rs:{order.totalPrice}</td>
                <td style={{ width: "100px" }}>
                  {order.isDelivered ? (
                    <div className="text-white" style={{ background: " #90EE90" }}>
                    Paid
                  </div>
                  ) : (
                    <>
                   
                      <div className="text-white" style={{ background: " #FFCCCB" }}>
                     NotPaid
                    </div>
                    </>
                  )}
                </td>
                <td>{moment(order.createdAt).calendar()}</td>
                <td>
                  {order.isDelivered ? (
                    <div className="text-white" style={{ background: " #008000" }}>
                      DELIVERED
                    </div>
                  ) : (
                    <>
                      <div className="text-white" style={{ background: "#454545" }}>
                        Not DELIVERED

                      </div>
                    </>
                  )}

                </td>
                <td className="d-flex justify-content-end align-item-center">
                  <Link to={`/order/${order._id}`} className="text-success">
                    <i className="fas fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
      </Tbody>
    </Table>
        
      </>
      );
};

      export default Order1;
