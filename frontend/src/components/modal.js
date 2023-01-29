import React from "react";

const Modal = ({ data }) => {
  return (
    <div id="myModal" className="modal">
      <button
        onClick={() => {
          const modal = document.querySelector("#myModal");
          modal.style.display = "none";
        }}
      >
        Close
      </button>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <button>Upvote</button>
      <p>Comments go here</p>
    </div>
  );
};

export default Modal;
