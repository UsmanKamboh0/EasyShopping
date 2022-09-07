import React from "react";
import AdminHeader from "../HomeScreen/Header";
import Main from "../HomeScreen/Main";
import Sidebar from "../HomeScreen/Sidebar";
import "./Admin1.css";
const AdminDashboard = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <AdminHeader />
        <Main />
      </main>
    </>
  );
};

export default AdminDashboard;
