import './App.css';

function App() {
  const data = ["New York", "Boston", "Philly", "dallas"]
  return (
    <div className="App">
      <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li>
        <li>{data[3]}</li>
       
      </ul>

    </div>
  );
}

export default App;
