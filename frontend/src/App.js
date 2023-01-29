import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Modal from "./components/modal";
import Card from "./components/card";
import New from "./components/new";

let sampleData = [
  {
    id: 1,
    title: "Title 1",
    text: "Text 1",
    points: 1,
    comments: 1,
  },
  {
    id: 2,
    title: "Title 2",
    text: "Text 2",
    points: 2,
    comments: 2,
  },
];

function App() {
  const [test, setTest] = useState(false);
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Header />
      <New/>
      {sampleData.map((item) => {
        return (
          <Card
            key={item.id}
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
