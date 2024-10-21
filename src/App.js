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
import ProtectedRoute from "./Components/Route/ProtectedRoute";
function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/userprofile' element={<UserProfile/>}/>
        </Route>
        <Route path="/form/:formId" element={<FormComponent />} />
      </Routes>
    </Router>

  );
}

export default App;
