import React from "react";
import axios from "axios";

const Modal = ({ data, comments, getPosts }) => {
  if (comments.length > 0) {
    comments = comments.filter((item) => item.post == data._id);
  }

  const upvotePost = async () => {
    console.log(typeof data._id);
    const payload = {id: data._id, points: data.points + 1}
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/post/upvote`,
      payload
    );
    const json = await response.data;
    console.log(json);
    getPosts()
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
