
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Cart2 from "./pages/Cart2";
import Cart3 from "./pages/Cart3";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signin' element={<Signin />} />
          <Route path='cart' element={<Cart />} />
          <Route path='cart2' element={<Cart2 />} />
          <Route path='cart3' element={<Cart3 />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
