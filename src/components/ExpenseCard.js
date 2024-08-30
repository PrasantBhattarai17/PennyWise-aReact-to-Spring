import {
    faArrowUp,
    faBreadSlice,
    faCreditCard,
    faFilm,
    faMoneyBills,

  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
import { useFetchData} from "../Hooks/useMoneyCard";

const ExpensesCard = () => {

const token =localStorage.getItem('token')
const { data:Gdata} = useFetchData('/expense/groceriescard',token);
const { data:Bdata} = useFetchData('/expense/billscard',token);
const { data:EnterData} = useFetchData('/expense/entertaintmentcard',token);
const { data:OEData} = useFetchData('/expense/otherscard',token);


  return (
    <div className="md:h-[250px] h-[800px] bg-gray-100 overflow-hidden">
    <div>
      <h3 className="font-sans text-2xl font-semibold py-5 px-10">Expenses</h3>
    </div>
    <div className="md:grid md:grid-cols-12 flex flex-col md:gap-0 gap-4">
      <div className="md:w-[88%] w-[68%] border-2 shadow-md m-auto h-40 rounded-xl  md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faBreadSlice} /> Groceries
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${Gdata?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{Gdata?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm ">{Gdata?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>

      </div>
      <div className="md:w-[88%] w-[68%] border-2 shadow-md m-auto h-40 rounded-xl md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faCreditCard} />
          Bills
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${Bdata?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{Bdata?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm ">{Bdata?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
      <div className="md:w-[88%] w-[68%] border-2 shadow-md m-auto h-40 rounded-xl  md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faFilm} /> Entertainments
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${EnterData?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{EnterData?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex text-sm ">{EnterData?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
      <div className="md:w-[88%] w-[68%] border-2 shadow-md m-auto h-40 rounded-xl   md:col-span-3 border-x-2 bg-[#ffffff]">
        <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
          <FontAwesomeIcon className="mx-1" icon={faMoneyBills} /> Others
        </h3>
        <span className="flex mx-5 my-5 space-x-3">
          <h1 className="text-5xl font-bold font-sans">${OEData?.total}</h1>
          <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex "><FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp}/>{OEData?.percentage}%</p>
        </span>
        <span className="flex mx-2 space-x-1 w-full">
          <p className=" text-green-400 bg-gray-100 rounded-md flex  text-sm">{OEData?.message}</p>
          <p className="font-sans font-semibold text-md text-gray-500 text-sm">than last month</p>
        </span>
      </div>
    </div>
  </div>
  )
}

export default ExpensesCard