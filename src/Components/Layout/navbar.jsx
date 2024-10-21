import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className="text-2xl font-bold">Campus Link</div>
    <div>
      <button className="mr-4 text-gray-600" onClick={handlelogin}>Login</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handlesignup}>SIGNUP</button>
    </div>
  </nav>
  </div>
  )
}

export default Navbar