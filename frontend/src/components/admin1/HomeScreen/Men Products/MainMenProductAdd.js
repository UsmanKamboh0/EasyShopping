import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import AddMenProduct from "./AddMenProduct";
const MainMenProductAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        
        <AddMenProduct/>
        {/* <AddProductMain /> */}
      </main>
    </>
  );
};

export default MainMenProductAdd;
