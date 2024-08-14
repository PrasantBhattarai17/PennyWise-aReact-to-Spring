import React from 'react'

const InputIncomes = () => {
  return (
    <div className='overflow-x-hidden'>
         <div className=" grid grid-cols-6  my-8 border-b-2 pb-4 border-gray-100">
        <div className="col-span-1 w-full mx-5">
          <p className="text-sm font-sans font-semibold text-gray-500">Date</p>
        </div>
        <div className="col-span-2 w-full mx-5">
          <p className="text-sm font-sans font-semibold text-gray-500">
            Description
          </p>
        </div>
        <div className="col-span-1 w-full mx-5">
          <p className="text-sm font-sans font-semibold text-gray-500">
            Amount
          </p>
        </div>
        <div className="col-span-1 w-full mx-5">
          <p className="text-sm font-sans font-semibold text-gray-500">
            Category
          </p>
        </div>
        <div className="col-span-1 w-full mx-5">
          <p className="text-sm font-sans font-semibold text-gray-500">
            Action
          </p>
        </div>
      </div>
      <form>
         <div className=" grid grid-cols-6 mr-4 my-2 border-b-2 pb-4 border-gray-100">
        <div className="col-span-1 w-full mx-2">
      <input placeholder='Ex: 2024-02-14' className='p-2 border-2 rounded-lg w-[90%] mx-2'></input>
        </div>
        <div className="col-span-2 w-full mx-2">
        <input placeholder='Description' className='p-2 border-2 rounded-lg w-[90%] mx-2'></input>
        </div>
        <div className="col-span-1 w-full mx-2">
        <input placeholder='Amount' className='p-2 border-2 rounded-lg w-[90%] mx-2'></input>
        </div>
        <div className="col-span-1 w-full mx-2">
        <input placeholder='Category' className='p-2 border-2 rounded-lg w-[90%] mx-2'></input>
        </div>
        <div className="col-span-1 w-full mx-2">
        <input placeholder='Action' className='p-2 border-2 rounded-lg w-[90%] mx-2'></input>
        </div>
        <div className='col-span-6 flex justify-end w-full'>
      <button className='w-24 m-2 p-1 border-2 text-xl font-sans font-bold bg-[blueviolet] text-white rounded-xl shadow-lg ' >Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default InputIncomes