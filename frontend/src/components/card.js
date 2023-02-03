import axios from "axios";
import React from "react";

const Card = ({ data, comments, setData, getPosts, getComments }) => {
  if (comments.length > 0) {
    comments = comments.filter((item) => item.post == data._id);
  }

  const deletePost = async (e, id) => {
    e.stopPropagation();
    const modal = document.querySelector("#myModal");
    modal.style.display = "none";
    const postId = id.toString();
    console.log(postId);
    const payload = { id: postId };
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/posts/delete`,
      payload
      );
      const json = await response.data;
    getPosts();
    getComments();
  };

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setData(data);
          const modal = document.querySelector("#myModal");
          modal.style.display = "block";
        }}
      >
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <p>
          {comments.length} {comments.length != 1 ? "Comments" : "Comment"}
        </p>
        <button onClick={(e) => deletePost(e, data._id)}>Delete</button>
      </div>
    </>
  );
};

export default Card;
