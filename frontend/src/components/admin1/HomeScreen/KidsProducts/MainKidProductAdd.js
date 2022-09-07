import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import AddKidProduct from "./AddKidProduct";
const MainKidProductAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        
        <AddKidProduct/>
        {/* <AddProductMain /> */}
      </main>
    </>
  );
};

export default MainKidProductAdd;
