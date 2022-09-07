import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MainWomenProducts from "./MainWomenProducts";

const WomenProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainWomenProducts />
      </main>
    </>
  );
};

export default WomenProductScreen;
