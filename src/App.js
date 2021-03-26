import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
