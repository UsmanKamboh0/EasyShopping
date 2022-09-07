import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import OrderDetailmain from "../../HomeScreen/Orders/OrderDetailmain";

const OrderDetailScreen = ({ match }) => {
  const orderId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailmain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailScreen;
