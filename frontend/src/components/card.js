import React from "react";

const Card = ({ data, test, setData, setTest }) => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          setData(data);
          setTest(!test);
          const modal = document.querySelector("#myModal");
          modal.style.display = "block";
          console.log("modal");
        }}
      >
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <p>
          {data.points} Points | {data.comments} Comments
        </p>
      </div>
    </>
  );
};

export default Card;
