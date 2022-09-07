import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import updateuser from "./updateuser";

const updateUserScreen = ({ match }) => {
  const userId = match.params.id;
  return (
    <>
<Sidebar/>
      <main className="main-wrap">
<Header/>  
    
        <updateuser userId={userId} />
      </main>
    </>
  );
};
export default updateUserScreen;
