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

  const upvotePost = async () => {
    const id = data._id.toString();
    const payload = { id: id, points: data.points + 1 };
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/post/upvote`,
      payload
    );
    const json = await response.data;
    getPosts();
    getComments();
  };

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
      <p>
        {data.points} {data.points != 1 ? "Points" : "Point"}
      </p>
      <button onClick={upvotePost}>Upvote</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add comment: </label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {comments.length > 0 ? (
        comments
          .sort(compare)
          .map((item) => <p key={item._id}>{item.content}</p>)
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
};

export default Modal;
