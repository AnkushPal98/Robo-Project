import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList";
import robots from "./components/Data";

function App() {
  return (
    <div className="App">
      <h1>Robo Project</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
