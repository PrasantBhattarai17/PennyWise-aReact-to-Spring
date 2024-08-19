import {
    faArrowUp,
    faBreadSlice,
    faCreditCard,
    faFilm,
    faMoneyBills,

  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
import {UseIncomeCard} from "../Hooks/useMoneyCard";

const ExpensesCard = () => {

const token =localStorage.getItem('token')
 const { data} = UseIncomeCard(token);
const income=data?.total|| 0.00;


  return (
    <div className="h-[250px] bg-gray-100">
    <div>
      <h3 className="font-sans text-2xl font-semibold py-5 px-10">Expenses</h3>
    </div>
    <div className="grid grid-cols-12">
      <div className="w-[88%] border-2 shadow-md m-auto h-40 rounded-xl  col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faBreadSlice} /> Groceries
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${income}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>12.2%</p>
        </span>
        <span className="flex mx-6 space-x-1">
          <p className=" text-green-400 bg-gray-100 rounded-md flex ">+$112</p>
          <p className="font-sans font-semibold text-md text-gray-500">than last month</p>
        </span>

      </div>
      <div className="w-[88%] border-2 shadow-md m-auto h-40 rounded-xl col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faCreditCard} />
          Bills
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">$928.89</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>12.2%</p>
        </span>
        <span className="flex mx-6 space-x-1">
          <p className=" text-green-400 bg-gray-100 rounded-md flex ">+$112</p>
          <p className="font-sans font-semibold text-md text-gray-500">than last month</p>
        </span>
      </div>
      <div className="w-[88%] border-2 shadow-md m-auto h-40 rounded-xl  col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faFilm} /> Entertainments
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">$928.89</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>12.2%</p>
        </span>
        <span className="flex mx-6 space-x-1">
          <p className=" text-green-400 bg-gray-100 rounded-md flex ">+$112</p>
          <p className="font-sans font-semibold text-md text-gray-500">than last month</p>
        </span>
      </div>
      <div className="w-[88%] border-2 shadow-md m-auto h-40 rounded-xl   col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faMoneyBills} /> Others
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">$928.89</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>12.2%</p>
        </span>
        <span className="flex mx-6 space-x-1">
          <p className=" text-green-400 bg-gray-100 rounded-md flex ">+$112</p>
          <p className="font-sans font-semibold text-md text-gray-500">than last month</p>
        </span>
      </div>
    </div>
  </div>
  )
}

export default ExpensesCard