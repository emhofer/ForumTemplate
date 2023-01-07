import logo from "./logo.svg";
import Header from "./components/header";

let sampleData = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Header/>
      {sampleData.map((item) => {
        console.log(item);
        return (
          <>
            <div className="card">
              <h3>Card Title</h3>
              <p>Card Text</p>
              <p>x Points | x Comments</p>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default App;
