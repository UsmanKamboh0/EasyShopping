import React from "react";
import Sidebar from "../Sidebar";
import Header from "../../HomeScreen/Header";
import OrderMain from "./OrderMain";

const AllOrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain />
      </main>
    </>
  );
};

export default AllOrderScreen;
