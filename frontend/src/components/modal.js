import React from "react";

const Modal = ({ data, comments }) => {
  if (comments.length > 0) {
    comments = comments.filter((item) => item.post == data._id);
  }
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
      <p>{data.content}</p>
      <button>Upvote</button>
      <form action="">
        <label htmlFor="comment">Add comment: </label>
        <input type="text" name="comment" id="comment" />
        <input type="submit" value="Submit" />
      </form>
      {comments.length > 0 ? (
        comments.map((item) => <p key={item._id}>{item.content}</p>)
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
};

export default Modal;
