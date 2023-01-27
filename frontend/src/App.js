import { useState } from "react";
import './App.css';
import Header from "./components/header";

let sampleData = [1, 2, 3, 4, 5];

function App() {
  const [test, setTest] = useState(false);

  return (
    <div className="App">
      <Header />
      {sampleData.map((item) => {
        console.log(item);
        return (
          <>
            <div className="card" onClick={() => setTest(!test)}>
              <h3>Card Title</h3>
              <p>Card Text</p>
              <p>x Points | x Comments</p>
            </div>
            <hr />
          </>
        );
      })}
      {test ? <div className="modal"></div> : false}
    </div>
  );
}

export default App;
