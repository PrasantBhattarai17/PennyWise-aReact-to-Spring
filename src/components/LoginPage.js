import React from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
    const navigate =useNavigate();
  return (
    <div className='cursor-pointer' onClick={()=>navigate("/overview")}>LoginPage</div>
  )
}

export default LoginPage