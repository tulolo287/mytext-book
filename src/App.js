import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import InfoSection from "./components/InfoSection";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='signin' element={<Signin/>} />
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
