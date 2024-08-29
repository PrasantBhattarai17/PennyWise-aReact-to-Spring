import React, { useEffect, useState } from "react";
import HeadTransactions from "./headTransactions";
import { useDispatch, useSelector } from "react-redux";
import { addUserIncome } from "../Store/IncomeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { income } from "../utils/constants";
import useAddIncome from "../Hooks/useAddIncome";
import { useFetchData } from "../Hooks/useMoneyCard";

const InputIncomes = () => {
  const [iname, setDescription] = useState("");
  const [iamount, setAmount] = useState("");
  const [icategory, setCategory] = useState("");
  const incomeData = useSelector((store) => store.income.incomes);
  const token = localStorage.getItem("token");
  const [financeData, setFinanceData] = useState([]);
  const dispatch = useDispatch();
  const { addIncome, isLoading, error, success } = useAddIncome();

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

  useEffect(() => {
    fetchRandom();
  }, [incomeData]); 

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
      addIncome(incomeEntry);
      dispatch(addUserIncome({ iname, iamount, icategory }));
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  const categories = Object.keys(income);

  return (
    <div className="overflow-x-hidden">
      <HeadTransactions />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 mr-4 my-2 border-b-2 pb-4 border-gray-100">
          <div className="col-span-1 w-full mx-2">
            <p className="p-2 text-md border-2 rounded-lg text-gray-400 w-[90%] mx-2">
              Today's Date
            </p>
          </div>
          <div className="col-span-2 w-full mx-2">
            <input
              placeholder="Description"
              value={iname}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Amount"
              value={iamount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <select
              value={icategory}
              onChange={(e) => setCategory(e.target.value)}
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
              {item?.idate}
            </p>
          </div>
          <div className="col-span-2 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.iname}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              ${item?.iamount}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
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
