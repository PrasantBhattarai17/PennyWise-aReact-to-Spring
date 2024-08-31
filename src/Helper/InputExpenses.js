import React, { useEffect, useState } from "react";
import HeadTransactions from "./headTransactions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addUserExpense } from "../Store/expenseSlice";
import { expenses } from "../utils/constants";
import useAddExpenses from "../Hooks/useAddExpense";
import { ToggleExpense } from "../Store/transactionSlice";
import { useFetchData } from "../Hooks/useMoneyCard";

const InputExpense = () => {
  const [ename, setEname] = useState("");
  const [eamount, setEAmount] = useState("");
  const [ecategory, setECategory] = useState("");
 
  const dispatch = useDispatch();
  const expense = useSelector((store) => store.expense.expenses);
  const token =localStorage.getItem('token')
  const [financeData,setFinancedata]=useState([]);

  const { fetchData:fetchGrocery} = useFetchData('/expense/groceriescard',token);
  const { fetchData:fetchBills} = useFetchData('/expense/billscard',token);
  const { fetchData:fetchEnter} = useFetchData('/expense/entertaintmentcard',token);
  const { fetchData:fetchOther} = useFetchData('/expense/otherscard',token);

  const deleteExpense = async (id) => {
    const response = await fetch(`/expense/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data=await response.text();
    if (response.ok) {
      setFinancedata(financeData.filter((item) => item.eid !== id));
    }
  };

  const fetchRandom=async()=>{
    const response =await fetch("/expense/monthexpense",{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }  
  );
  const data=await response.json();
  setFinancedata(data);

  }
 
  

const handleDelete=(id)=>{
  deleteExpense(id);
  dispatch(ToggleExpense());
  fetchGrocery();
  fetchBills();
  fetchEnter();
  fetchOther();
};


  const { addExpenses, isLoading, error, success } = useAddExpenses();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ename !== "" &&
      eamount !== "" &&
      ecategory !== "" 
    ){
      const expenseEntry = { ename, eamount: parseFloat(eamount), ecategory  };
      addExpenses(expenseEntry)
      dispatch(addUserExpense({ ename, eamount, ecategory }));
      fetchRandom();
      fetchGrocery();
      fetchBills();
      fetchEnter();
      fetchOther();
      dispatch(ToggleExpense());
      setEname("");
      setEAmount("");
      setECategory("");
    }
  };
  useEffect(()=>{
    fetchRandom();
  },[expense])

  const categories = Object.keys(expenses);

  return (
    <div className="overflow-x-hidden">
    <div className="md:block hidden">
     <HeadTransactions />
      </div> 
          <h1 className="md:hidden text-xl font-bold font-sans text-center m-4 ">Add Expenses</h1>
      <form onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-6 flex flex-col  md:mx-0 mx-6 md:gap-0 gap-2  mr-4 my-2 border-b-2 pb-4 border-gray-100">
        <div className="md:col-span-1 w-full mx-2">
          <p className="p-2 text-md  border-2 rounded-lg text-gray-400 w-[90%] mx-2">Today's Date</p>
          </div>  
          <div className="md:col-span-2 w-full mx-2">
            <input
              placeholder="Description"
              value={ename}
              onChange={(e) => setEname(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="md:col-span-1 w-full mx-2">
            <input
              placeholder="Amount"
              value={eamount}
              onChange={(e) => setEAmount(e.target.value)}
              className="p-2 border-2 rounded-lg w-[90%] mx-2"
              type="text"
            />
          </div>
          <div className="md:col-span-2 flex ">
          <div className=" w-[60%] mx-2">
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
          <div className=" w-[40%] flex justify-center mx-2">
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
          className="grid grid-cols-6 md:my-8  border-b-2 pb-4 border-gray-100 min-w-full"
        >
          <div className="col-span-1 w-full md:mx-5 mx-2">
            <p className="text-sm font-sans font-semibold text-gray-500">
              {item?.edate}
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
            <p onClick={()=>handleDelete(item?.eid)} className="text-md font-sans font-semibold text-gray-500 hover:text-[blueviolet] mx-5 cursor-pointer">
              <FontAwesomeIcon icon={faTrash} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputExpense;
