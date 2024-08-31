import logo from "./logo.svg";
import "./App.css";
import { useApp } from "./provider/app-context";
import Test from "./test";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { state } = useApp();

  return (
    <div className="App">
      <BrowserRouter>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
