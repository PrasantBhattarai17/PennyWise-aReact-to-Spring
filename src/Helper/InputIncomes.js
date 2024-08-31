import React, { useEffect, useState } from "react";
import HeadTransactions from "./headTransactions";
import { useDispatch, useSelector } from "react-redux";
import { addUserIncome } from "../Store/IncomeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { income } from "../utils/constants";
import useAddIncome from "../Hooks/useAddIncome";
import { useFetchData } from "../Hooks/useMoneyCard";
import {  ToggleIncome } from "../Store/transactionSlice";

const InputIncomes = () => {
  const [iname, setDescription] = useState("");
  const [iamount, setAmount] = useState("");
  const [icategory, setCategory] = useState("");
  const incomeData = useSelector((store) => store.income.incomes);
  const token = localStorage.getItem("token");
  const [financeData, setFinanceData] = useState([]);
  const dispatch = useDispatch();
  const { addIncome, isLoading, error, success } = useAddIncome();
  const {fetchData:fetchSalary}=useFetchData("/income/salarycard",token);
  const {fetchData:fetchInvest}=useFetchData("/income/investmentcard",token);
  const {fetchData:fetchReal  }=useFetchData("/income/realstatecard",token);
  const {fetchData:fetchOthers}=useFetchData("/income/otherscard",token);

  const fetchRandom = async () => {
    const response = await fetch("/income/monthbalance", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    setFinanceData(json);
  };
 

  const deleteIncome = async (id) => {
    const response = await fetch(`/income/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      setFinanceData(financeData.filter((item) => item.iid !== id)); 
    }
  };

  const handleDelete = (id) => {
    deleteIncome(id);
    dispatch(ToggleIncome());
    fetchSalary(); 
    fetchInvest();
    fetchReal();
    fetchOthers();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      iname !== "" &&
      iamount !== "" &&
      icategory !== "" &&
      parseFloat(iamount) > 0
    ) {
      const incomeEntry = { iname, iamount: parseFloat(iamount), icategory };
      dispatch(addUserIncome({ iname, iamount, icategory }));
      addIncome(incomeEntry);
      fetchRandom();
     fetchSalary(); 
     fetchInvest();
     fetchReal();
     fetchOthers();
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  useEffect(() => {
    fetchRandom();
  }, [incomeData]);

  const categories = Object.keys(income);

  return (
    <div className="overflow-x-hidden">
   <div className="md:block hidden">
  <HeadTransactions />
      </div> 
          <h1 className="md:hidden text-xl font-bold font-sans text-center m-2 ">Add Earnings</h1>
           <form onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-6 items-center mr-4 my-2 border-b-2 pb-4 border-gray-100 md:space-y-0 space-y-2">
          <div className="md:col-span-1 w-full md:mx-2 mx-auto">
            <p className="p-2 text-sm md:text-md border-2 rounded-lg text-gray-400 w-[90%] mx-auto">
              Today's Date
            </p>
          </div>
          <div className="md:col-span-2 w-full md:mx-2 mx-6">
            <input
              placeholder="Description"
              value={iname}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] md:mx-2 mx-auto"
              type="text"
            />
          </div>
          <div className="md:col-span-1 w-full md:mx-2 mx-6">
            <input
              placeholder="Amount"
              value={iamount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] "
              type="text"
            />
          </div>
          <div className="md:col-span-2 flex flex-row  md:mx-0 mx-2">
          <div className=" md:w-full w-[70%] md:mx-2 mx-auto">
            <select
              value={icategory}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border-2 rounded-lg md:w-[90%] w-[80%] md:mx-2 mx-4"
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
          <div className=" md:w-full w-[40%] flex justify-center md:mx-2 mx-1">
            <button
              type="submit"
              className="w-2/3 mx-2 p-1 border-2 text-xl font-sans font-bold bg-[blueviolet] text-white rounded-xl shadow-lg"
            >
              Add
            </button>
          </div>
          </div>
        </div>
      </form>
      <div className="md:hidden flex">
  <HeadTransactions />
      </div>
      {financeData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-6 md:my-8 my-2 border-b-2 pb-4 border-gray-100 min-w-full"
        >
          <div className="col-span-1 w-full md:mx-5 md:ml-5 ml-1">
            <p className="text-[14px] font-sans font-semibold text-gray-500">
              {item?.idate}
            </p>
          </div>
          <div className="col-span-2 w-full md:mx-5 mx-2">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.iname}
            </p>
          </div>
          <div className="col-span-1 w-full md:mx-5 mx-1">
            <p className="text-sm font-sans font-semibold text-gray-500">
              ${item?.iamount}
            </p>
          </div>
          <div className="col-span-1 w-full md:mx-5 mx-1">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.icategory}
            </p>
          </div>
          <div className="col-span-1 w-full flex justify-center">
            <p
              onClick={() => handleDelete(item?.iid)}
              className="text-md font-sans font-semibold text-gray-500 hover:text-[blueviolet] mx-5 cursor-pointer"
            >
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputIncomes;
