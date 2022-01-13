import React from "react";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content ">
          <p className="error-msg">{props.message}</p>
        </div>
        <footer>
          <button onClick={props.onConfirm}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export { ErrorModal };
