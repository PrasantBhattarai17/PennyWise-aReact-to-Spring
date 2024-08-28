import React, { useEffect, useState } from "react";
import HeadTransactions from "./headTransactions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addUserExpense } from "../Store/expenseSlice";
import { expenses } from "../utils/constants";
import useAddExpenses from "../Hooks/useAddExpense";

const InputExpense = () => {
  const [ename, setEname] = useState("");
  const [eamount, setEAmount] = useState("");
  const [ecategory, setECategory] = useState("");
 
  const dispatch = useDispatch();
  const expense = useSelector((store) => store.expense.expenses);
  const token =localStorage.getItem('token')
  const [financeData,setFinancedata]=useState([]);

  const fetchRandom=async()=>{
    const response =await fetch("/expense/monthexpense",{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    });
    const json  =await response.json();
    setFinancedata(json);
    console.log(financeData);
  }
  useEffect(()=>{
    fetchRandom();
  },[expense])

  const { addExpenses, isLoading, error, success } = useAddExpenses();


  const handleSubmit = (e) => {
    if (
      ename !== "" &&
      eamount !== "" &&
      ecategory !== "" 
    ) {
      e.preventDefault();
      const expenseEntry = { ename, eamount: parseFloat(eamount), ecategory  };
      addExpenses(expenseEntry)
      dispatch(addUserExpense({ ename, eamount, ecategory }));
      setEname("");
      setEAmount("");
      setECategory("");
      console.log(isLoading,error,success)
    }
  };
  const categories = Object.keys(expenses);

  return (
    <div className="overflow-x-hidden">
      <HeadTransactions />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 mr-4 my-2 border-b-2 pb-4 border-gray-100">
        <div className="col-span-1 w-full mx-2">
          <p className="p-2 text-md  border-2 rounded-lg text-gray-400 w-[90%] mx-2">Today's Date</p>
          </div>  
          <div className="col-span-2 w-full mx-2">
            <input
              placeholder="Description"
              value={ename}
              onChange={(e) => setEname(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Amount"
              value={eamount}
              onChange={(e) => setEAmount(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <select
              value={ecategory}
              onChange={(e) => setECategory(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1 w-full flex justify-center mx-2">
          <button
              type="submit"
              className="w-1/2 mx-2 p-1 border-2 text-xl font-sans font-bold bg-[blueviolet] text-white rounded-xl shadow-lg"
            >
              Add
            </button>
          </div>
        </div>
      </form>
      {financeData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-6 my-8 border-b-2 pb-4 border-gray-100 min-w-full"
        >
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.date}
            </p>
          </div>
          <div className="col-span-2 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.ename}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              ${item?.eamount}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.ecategory}
            </p>
          </div>
          <div className="col-span-1 w-full flex justify-center">
            <p className="text-md font-sans font-semibold text-gray-500 hover:text-[blueviolet] mx-5 cursor-pointer">
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputExpense;
