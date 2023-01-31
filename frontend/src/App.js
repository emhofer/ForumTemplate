import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Modal from "./components/modal";
import Card from "./components/card";
import New from "./components/new";
import getData from "./scripts/getdata";

function App() {
  const [test, setTest] = useState(false);
  const [data, setData] = useState({});
  const [APIposts, setAPIposts] = useState([]);
  const [APIcomments, setAPIcomments] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append(
      "api-key",
      "QC4Z2hYLXTHhSVifFSZqatSRRA1wZ9eI8c7JTEhURj5cAhioW9OycbYVcZvQFlfv"
    );
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
      dataSource: "Cluster0",
      database: "forum",
      collection: "posts",
    });

     var rawComments = JSON.stringify({
       dataSource: "Cluster0",
       database: "forum",
       collection: "comments",
     });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var requestOptionsComments = {
      method: "POST",
      headers: myHeaders,
      body: rawComments,
      redirect: "follow",
    };

    fetch(
      "https://justcors.com/tl_8f8a771/https://data.mongodb-api.com/app/data-gcxtx/endpoint/data/v1/action/find",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setAPIposts(result.documents);
      })
      .catch((error) => console.log("error", error));

      fetch(
        "https://justcors.com/tl_8f8a771/https://data.mongodb-api.com/app/data-gcxtx/endpoint/data/v1/action/find",
        requestOptionsComments
      )
        .then((response) => response.json())
        .then((result) => {
          setAPIcomments(result.documents);
        })
        .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <New />
      {APIposts.map((item) => {
        return (
          <Card
            key={item._id}
            data={item}
            comments={APIcomments}
            test={test}
            setData={setData}
            setTest={setTest}
          />
        );
      })}
      <Modal data={data} comments={APIcomments} />
    </div>
  );
}

export default App;
