import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import HeadTransactions from "../Helper/headTransactions";
const RecentTransactions = () => {
  const token =localStorage.getItem('token')
  const [financeData,setFinancedata]=useState(null);

  const fetchRandom=async()=>{
    const response =await fetch("/random",{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    });
    const json  =await response.json();
    setFinancedata(json);
 }

  useEffect(()=>{
    fetchRandom();
  },[])
  useEffect(() => {
  }, [financeData]);
 
  if(!financeData)
    return


  return (
    <div className="bg-white w-[97%] m-auto 100  my-5 rounded-lg shadow-lg overflow-x-hidden  ">
      <span className="flex justify-between">
        <h1 className="pt-5 mx-5 text-xl font-sans font-semibold">
          Recent Transactions
        </h1>
      </span>
      <HeadTransactions/>
      {financeData.map((item,index) => (
        <div key={index} className=" grid grid-cols-6  my-8 border-b-2 pb-4 border-gray-100 min-w-full ">
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.iid?item?.idate:item?.edate}
            </p>
          </div>
          <div className="col-span-2 w-full mx-5">
            <p className={`text-sm font-sans font-semibold t ${item?.iid?"text-green-600":"text-red-600"}`}>
            {item?.iid?item?.iname:item?.ename}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className={`text-sm font-sans font-semibold t ${item?.iid?"text-green-600":"text-red-600"}`}>
              ${item?.iid?item?.iamount:item?.eamount}

            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
            {item?.iid?item?.icategory:item?.ecategory}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-md font-sans font-semibold text-gray-500 hover:text-[blueviolet] mx-5 cursor-pointer">
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
