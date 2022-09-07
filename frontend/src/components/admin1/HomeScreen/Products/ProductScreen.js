import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MainProducts from "../Products/MainProducts";

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductScreen;
