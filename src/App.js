import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import InfoSection from "./components/InfoSection";

function App() {

  return (
    <div className="App">
      <Router>
        <Home />
        <InfoSection/>
      </Router>
    </div>
  );
}

export default App;
