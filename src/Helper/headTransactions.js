import React from 'react'

const HeadTransactions = () => {
  return (
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
  )
}

export default HeadTransactions