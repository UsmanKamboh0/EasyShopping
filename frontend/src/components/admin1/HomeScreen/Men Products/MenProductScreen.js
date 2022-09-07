import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import MainMenProducts from "./MainMenProducts";

const MenProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainMenProducts />
      </main>
    </>
  );
};

export default MenProductScreen;
