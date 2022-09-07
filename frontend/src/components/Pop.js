import React from "react";
import "../components/css/style1.css"

const Popup = props => {
  return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
    </>
  );
};

export default Popup;