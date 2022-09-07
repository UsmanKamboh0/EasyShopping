import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MainKidProducts from "./MainKidProducts";

const KidProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainKidProducts />
      </main>
    </>
  );
};

export default KidProductScreen;
