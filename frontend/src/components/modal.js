import React, { useState } from "react";
import axios from "axios";

const Modal = ({
  data,
  comments,
  getPosts,
  getComments,
  compare,
  setData,
  posts,
}) => {
  if (comments.length > 0) {
    comments = comments.filter((item) => item.post == data._id);
  }

  

  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = data._id.toString();
    const payload = { post: id, content: comment, timestamp: new Date() };
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/comments/add`,
      payload
    );
    const json = await response.data;
    getPosts();
    getComments();
    setComment("");
  };

  const deleteComment = async (id) => {
    const commentId = id.toString();
    const payload = { id };
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/comments/delete`,
      payload
    );
    const json = await response.data;
    getPosts();
    getComments();
    setComment("");
  };

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
      <p className="multiLine">{data.content}</p>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add comment: </label>
        <br />
        <textarea
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        /> <br />
        <input type="submit" value="Submit" />
      </form>
      {comments.length > 0 ? (
        comments.sort(compare).map((item) => (
          <div key={item._id}>
            <p className="multiLine">
              <button className="" onClick={() => deleteComment(item._id)}>
                Delete
              </button>{" "}
              {item.content}
            </p>
          </div>
        ))
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
};

export default Modal;
