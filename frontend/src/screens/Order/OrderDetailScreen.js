import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import UserOrderDetailmain from "./UserOrderDetailmain";
const OrderDetailScreen = ({ match }) => {
  const orderId = match.params.id;
  return (
    <>
      <main >
        <MobileMenu/>
        <Header />
        <UserOrderDetailmain orderId={orderId} />
      </main>
      <Footer/>
    </>
  );
};

export default OrderDetailScreen;
