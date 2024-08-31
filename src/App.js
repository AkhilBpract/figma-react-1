import logo from "./logo.svg";
import "./App.css";
import { useApp } from "./provider/app-context";
import Test from "./test";
import { BrowserRouter } from "react-router-dom";
import Route from "./rotes/route";

function App() {
  const { state } = useApp();

  return (
    <div className="App">
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
