import React, { useState } from "react";
import axios from "axios";

const New = ({ getPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, content, timestamp: new Date() };
    const response = await axios.post(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/posts/add`,
      payload
    );
    getPosts();
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Submit new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label><br />
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="content">Content: </label><br />
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default New;
