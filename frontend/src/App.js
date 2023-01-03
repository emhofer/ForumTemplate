import logo from "./logo.svg";

let sampleData = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
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
