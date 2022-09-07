import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

const Orders = (props) => {
  const { orders , user  } = props;
  return (
    <>
     <Table >
      <Thead>
        <Tr>
            
          
          <Th>Order ID </Th>
          <Th>Address</Th>
          <Th>Total</Th>
          <Th>Paid</Th>
          <Th>Date</Th>
          <Th>Status</Th>
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
                  <Link to={`/adminorder/${order._id}`} className="text-success">
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

      export default Orders;
