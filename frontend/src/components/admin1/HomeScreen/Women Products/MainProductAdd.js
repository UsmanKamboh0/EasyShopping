import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import AddWomenProduct from "./AddWomenProduct";
const MainWomenProductAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        
        <AddWomenProduct/>
        {/* <AddProductMain /> */}
      </main>
    </>
  );
};

export default MainWomenProductAdd;
