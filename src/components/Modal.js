import React from "react";
import "./model.css";

function Modal({CloseModal}){
    return(
      <div className="modelbackground">
        <div className="modelcontainer">
            <div className="titleclosebtn">
            <button onClick={()=>CloseModal(false)}>X</button>
            </div>
            <div className="title">
            <h1>are You sure you want to continue?</h1>
            </div>
        
        <div className="body">
            <p>The next page is awesome! You should move forward, you will enjoy it.</p>
        </div>
        <div className="footer">
            <button  onClick={()=>CloseModal(false)} id="cancelbtn">Cancel</button>
            <a href="index.html">Continue</a>
        </div>
        </div>
      </div>
    );
}

export default Modal;