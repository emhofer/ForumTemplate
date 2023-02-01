import React from "react";

const Card = ({ data, comments, setData }) => {
  if (comments.length > 0) {
    comments = comments.filter((item) => item.post == data._id);
  }
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
          {data.points} {data.points != 1 ? "Points" : "Point"} |{" "}
          {comments.length} {comments.length != 1 ? "Comments" : "Comment"}
        </p>
      </div>
    </>
  );
};

export default Card;
