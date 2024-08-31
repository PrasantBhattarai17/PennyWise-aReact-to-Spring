import {
  faArrowUp,
  faDollar,
  faLandmark,
  faMoneyCheckDollar,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useFetchData } from "../Hooks/useMoneyCard";
import Shimmer from "../Helper/shimmer";

const MoneyCard = () => {
  const [income, setIncome] = useState(null);
  const [expense, setExpense] = useState(null);
  const [savings, setSavings] = useState(null);
  const [investment, setInvestment] = useState(null);

  const token = localStorage.getItem('token');
  const { data: incomedata } = useFetchData('/income/incomecard', token);
  const { data: expensedata } = useFetchData('/expense/expensecard', token);
  const { data: savingsdata } = useFetchData('/savingcard', token);
  const { data: investmentdata } = useFetchData('/income/investmentcard', token);

  useEffect(() => {
    if (incomedata) setIncome(incomedata);
    if (expensedata) setExpense(expensedata);
    if (savingsdata) setSavings(savingsdata);
    if (investmentdata) setInvestment(investmentdata);
  }, [incomedata, expensedata, savingsdata, investmentdata]);

  if (income === null &&  expense === null && savings === null && investment === null) {
    return <Shimmer/>; 
  }

  return (
    <div className="md:h-[250px] h-[830px] bg-gray-100">
      <div>
        <h3 className="font-sans text-2xl font-semibold py-5 px-10">Overview</h3>
      </div>
      <div className="md:grid md:grid-cols-12 flex flex-col justify-center md:gap-0 gap-4">
        <div className="md:w-[88%] w-[75%] border-2 shadow-md m-auto h-40 rounded-xl col-span-3 border-x-2 bg-[#ffffff]">
          <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
            <FontAwesomeIcon className="mx-1" icon={faDollar} /> Income
          </h3>
          <span className="flex mx-5 my-5 space-x-3">
            <h1 className="text-5xl font-bold font-sans">${income?.total}</h1>
            <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex">
              <FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp} />
              {income?.percentage}%
            </p>
          </span>
          <span className="flex mx-2 space-x-1 w-full">
            <p className="text-green-400 bg-gray-100 rounded-md flex text-sm">{income?.message}</p>
            <p className="font-sans font-semibold text-sm text-gray-500">than last month</p>
          </span>
        </div>
        <div className="md:w-[88%] w-[75%] border-2 shadow-md m-auto h-40 rounded-xl col-span-3 border-x-2 bg-[#ffffff]">
          <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
            <FontAwesomeIcon className="mx-1" icon={faMoneyCheckDollar} /> Expenses
          </h3>
          <span className="flex mx-5 my-5 space-x-3">
            <h1 className="text-5xl font-bold font-sans">${expense?.total}</h1>
            <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex">
              <FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp} />
              {expense?.percentage}%
            </p>
          </span>
          <span className="flex mx-2 space-x-1 w-full">
            <p className="text-green-400 bg-gray-100 rounded-md flex text-sm">{expense?.message}</p>
            <p className="font-sans font-semibold text-sm text-gray-500">than last month</p>
          </span>
        </div>
        <div className="md:w-[88%] w-[75%] border-2 shadow-md m-auto h-40 rounded-xl col-span-3 border-x-2 bg-[#ffffff]">
          <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
            <FontAwesomeIcon className="mx-1" icon={faPiggyBank} /> Savings
          </h3>
          <span className="flex mx-5 my-5 space-x-3">
            <h1 className="text-5xl font-bold font-sans">${savings?.total}</h1>
            <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex">
              <FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp} />
              {savings?.percentage}%
            </p>
          </span>
          <span className="flex mx-2 space-x-1 w-full">
            <p className="text-green-400 bg-gray-100 rounded-md flex">{savings?.message}</p>
            <p className="font-sans font-semibold text-sm text-gray-500">than last month</p>
          </span>
        </div>
        <div className="md:w-[88%] w-[75%] border-2 shadow-md m-auto h-40 rounded-xl col-span-3 border-x-2 bg-[#ffffff]">
          <h3 className="font-sans text-md my-2 mx-4 text-gray-500 font-semibold">
            <FontAwesomeIcon className="mx-1" icon={faLandmark} /> Investment
          </h3>
          <span className="flex mx-5 my-5 space-x-3">
            <h1 className="text-5xl font-bold font-sans">${investment?.total}</h1>
            <p className="mt-7 text-green-400 bg-gray-100 rounded-md flex">
              <FontAwesomeIcon className="mt-1 mr-1" icon={faArrowUp} />
              {investment?.percentage}%
            </p>
          </span>
          <span className="flex mx-2 space-x-1 w-full">
            <p className="text-green-400 bg-gray-100 rounded-md flex text-sm">{investment?.message}</p>
            <p className="font-sans font-semibold text-sm text-gray-500">than last month</p>
          </span>
        </div>
      </div>
      <h3 className="md:hidden font-sans text-2xl font-semibold py-5 mb-3 px-10">Analysis</h3>
    </div>
  );
};

export default MoneyCard;
