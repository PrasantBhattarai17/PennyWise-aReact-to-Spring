import React, { useState } from "react";
import HeadTransactions from "./headTransactions";
import { useDispatch, useSelector } from "react-redux";
import { addUserIncome } from "../Store/IncomeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const InputIncomes = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [action, setAction] = useState('');

  const dispatch = useDispatch();
  const incomeData=useSelector((store)=>store.income.incomes)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(date!=='' && description!=='' && amount !==''&&category!==''&&action!=='')
    dispatch(addUserIncome({ 'date': date, 'description': description, 'amount': amount, 'category': category, 'action': action }));
    setDate('');
    setDescription('');
    setAmount('');
    setCategory('');
    setAction('');
  }

  return (
    <div className="overflow-x-hidden">
      <HeadTransactions />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 mr-4 my-2 border-b-2 pb-4 border-gray-100">
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Ex: 2024-02-14"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="date"
            />
          </div>
          <div className="col-span-2 w-full mx-2">
            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-1 w-full mx-2">
            <input
              placeholder="Action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="col-span-6 flex justify-end w-full">
            <button type="submit" className="w-24 m-2 p-1 border-2 text-xl font-sans font-bold bg-[blueviolet] text-white rounded-xl shadow-lg">
              Add
            </button>
          </div>
        </div>
      </form>
      {incomeData.map((item,index) => (
        <div key={index} className=" grid grid-cols-6  my-8 border-b-2 pb-4 border-gray-100 min-w-full ">
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.date}
            </p>
          </div>
          <div className="col-span-2 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.description}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              ${item?.amount}
            </p>
          </div>
          <div className="col-span-1 w-full mx-5">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.category}
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

export default InputIncomes;