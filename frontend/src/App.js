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
  const [APIdata, setAPIData] = useState([]);

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

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://justcors.com/tl_bfb4fa6/https://data.mongodb-api.com/app/data-gcxtx/endpoint/data/v1/action/find",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setAPIData(result.documents);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <New />
      {APIdata.map((item) => {
        return (
          <Card
            key={item._id}
            data={item}
            test={test}
            setData={setData}
            setTest={setTest}
          />
        );
      })}
      <Modal data={data} />
    </div>
  );
}

export default App;
