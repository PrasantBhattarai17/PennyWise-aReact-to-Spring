import React from 'react'
import { useDispatch} from 'react-redux';
import { switchView } from '../Store/transactionSlice';
import { useNavigate } from 'react-router';
const RecentTransactions = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSwitch=()=>{
        dispatch(switchView())
        navigate("/transactions")
    }
  return (
    <div className='bg-white w-[97%] m-auto 100  my-5 rounded-lg shadow-lg '>
    <span className='flex justify-between' >
        <h1 className='pt-5 mx-5 text-xl font-sans font-semibold'>Recent Transactions</h1>
        <h3 onClick={()=>handleSwitch()}  className='pt-5 mx-7 text-md font-sans cursor-pointer font-semibold'>View all</h3>
    </span>
    <div className=' grid grid-cols-6  my-8 border-b-2 pb-4 border-gray-100'>
        <div className='col-span-1 w-full mx-5'><p className='text-sm font-sans font-semibold text-gray-500'>Date</p></div>
        <div className='col-span-2 w-full mx-5'><p className='text-sm font-sans font-semibold text-gray-500'>Description</p></div>
        <div className='col-span-1 w-full mx-5'><p className='text-sm font-sans font-semibold text-gray-500'>Amount</p></div>
        <div className='col-span-1 w-full mx-5'><p className='text-sm font-sans font-semibold text-gray-500'>Category</p></div>
        <div className='col-span-1 w-full mx-5'><p className='text-sm font-sans font-semibold text-gray-500'>Action</p></div>
    </div>
    </div>
  )
}

export default RecentTransactions