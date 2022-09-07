import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import EditProductMain from "./EditProductMain";

const EditMainKid1 = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
<Sidebar/>
      <main className="main-wrap">
<Header/>        
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default EditMainKid1;
