import React from 'react'
import BrandLogo from './BrandLogo'
import { useNavigate } from 'react-router'


const LoginForm = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className="h-[100px] bg-gray-100">
    <BrandLogo/>
    </div>
  <div className="flex flex-col justify-center items-center bg-gray-100 rounded-md h-[600px]">
    <form
      onSubmit={() => navigate("/overview")}
      className="flex flex-col items-center justify-center w-2/3 h-[550px] gap-2  rounded-xl shadow-xl border-2 "
    >
    <h1 className=" mb-5 font-sans font-semibold text-2xl">
      Welcome Back! Login to your account
    </h1>
      <input
        type="text"
        placeholder="Enter Username"
        className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm  focus:border-[blueviolet] focus:outline-none"
      />
      <p></p>
      <input
        placeholder="Enter Password"
        type="password"
        className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm  focus:border-[blueviolet] focus:outline-none"
      />
      <p></p>
      <button   className="border-2  mt-5 p-2 w-1/2 text-2xl font-bold font-sans bg-[blueviolet] text-white rounded-lg shadow-lg">Login </button>        
      
      </form>
  </div>
  </>
  )
}

export default LoginForm