import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import AddProduct from "./AddProject";
const MainProductAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        
        <AddProduct/>
        {/* <AddProductMain /> */}
      </main>
    </>
  );
};

export default MainProductAdd;
