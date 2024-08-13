import React from 'react'
import { useNavigate } from 'react-router'
import { LoginImage } from '../utils/constants';

const LoginPage = () => {
    const navigate =useNavigate();
  return (
   <div className='grid grid-cols-12'>
    <div className='col-span-6'></div>
    <div className='col-span-6'>
      <img className='w-full h-[700px]' src={LoginImage}/>
    </div>
   </div>
  )
}

export default LoginPage