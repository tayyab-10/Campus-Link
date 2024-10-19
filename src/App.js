import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import "./App.css"
import Signup from "./Components/User/Signup";
import Home from "./Components/Layout/Home";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import UserProfile from "./Components/User/UserProfile";
import Dashboard from "./Components/Layout/Dashboard";
import InductionForm from "./Components/Societies/InductionForm";
import FieldBuilder from "./Components/Societies/InductionForm";
import FormComponent from "./Components/Societies/FormComponent";
function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<InductionForm/>} />
        <Route path="/form/:formId" element={<FormComponent />} />
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
      </Routes>
    </Router>

  );
}

export default App;
