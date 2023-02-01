import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Modal from "./components/modal";
import Card from "./components/card";
import New from "./components/new";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [APIposts, setAPIposts] = useState([]);
  const [APIcomments, setAPIcomments] = useState([]);

  const getPosts = async () => {
    const response = await axios.get(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/posts`
    );
    const json = await response.data;
    setAPIposts(json);
  };

  const getComments = async () => {
    const response = await axios.get(
      `https://eu-central-1.aws.data.mongodb-api.com/app/forumtemplate-bkubi/endpoint/comments`
    );
    const json = await response.data;
    setAPIcomments(json);
  };

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  return (
    <div className="App">
      <Header />
      <New getPosts={getPosts}/>
      {APIposts.map((item) => {
        return (
          <Card
            key={item._id}
            data={item}
            comments={APIcomments}
            setData={setData}
          />
        );
      })}
      <Modal data={data} comments={APIcomments} />
    </div>
  );
}

export default App;
