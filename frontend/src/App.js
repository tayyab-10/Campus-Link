import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import "./App.css"
import Signup from "./Components/User/Signup";
import Home from "./Components/Layout/Home";
function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>

  );
}

export default App;
