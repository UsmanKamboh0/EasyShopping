import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  // if (!loading) {
  //   // Calculate Price
  //   const addDecimals = (num) => {
  //     return (Math.round(num * 100) / 100).toFixed(2);
  //   };

  //   // order.itemsPrice = addDecimals(
  //   //   order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  //   // );
  // }

  return (
    <>

      <table className="table border table-lg">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Product</th>
            <th style={{ width: "20%" }}>Unit Price</th>
            <th style={{ width: "20%" }}>Quantity</th>
            <th style={{ width: "20%" }} className="text-end">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {order.orderItems.map((item, index) => (
            <tr key={index}>
              <td>
                <Link className="itemside" to="#">
                  <div className="left">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "40px", height: "40px" }}
                      className="img-xs"
                    />
                  </div>
                  <div className="info">{item.name}</div>
                </Link>
              </td>
              <td>Rs:{item.price} </td>
              <td>{item.quantity} </td>
              <td className="text-end"> Rs:{item.quantity * item.price}</td>
            </tr>
          ))}

          <tr>
            <td colSpan="4">
              <Link className="itemside" to="#">

                <div className="info"></div>
              </Link>
              <article className="float-end">





                <dl className="dlist">
                  <dt>Tax:</dt> <dd>Rs:{order.taxPrice}</dd>
                </dl>
                <dl className="dlist">
                  <dt>Shipping cost:</dt> <dd>Rs:{order.shippingPrice}</dd>
                </dl>
                <dl className="dlist">
                  <dt>Grand total:</dt>
                  <dd>

                    <span>{order.totalPrice && order.totalPrice}</span>

                  </dd>
                </dl>
                <dl className="dlist">
                  <dt className="text-muted">Status:</dt>
                  <dd>
                    <b className="">{order.paymentInfo.status}</b>
                  </dd>
                </dl>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetailProducts;
