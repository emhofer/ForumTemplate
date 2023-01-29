import React from "react";

const New = () => {
  return (
    <div>
      <p>Submit new post</p>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="link">Link: </label>
        <input type="url" name="link" id="link" />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default New;
