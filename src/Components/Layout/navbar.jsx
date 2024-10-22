import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../Assets/Images/Screenshot_2024-10-22_143329-removebg-preview.png"
const Navbar = () => {

   const navigate=useNavigate();

    const handlelogin=()=>{
        navigate("/login")
    }
    const handlesignup=()=>{
        navigate("/signup")
    }
  return (
    <div>
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-100">
    <img
    src={logo}
    alt={logo}
    className="w-50 h-10"
  />
    <div>
      <button className="mr-4 text-gray-600" onClick={handlelogin}>Login</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handlesignup}>SIGNUP</button>
    </div>
  </nav>
  </div>
  )
}

export default Navbar