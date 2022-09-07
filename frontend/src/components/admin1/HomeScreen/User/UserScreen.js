import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import UserComponent from "../User/UserComponent";

const UsersScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default UsersScreen;
