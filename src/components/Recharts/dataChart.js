import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DataForSwitch from "../../utils/DataFoSwitch";
const DataChart = () => {
  const [isData, setIsData] = useState(true);
  const {income,expense}=DataForSwitch();
  const [data, setData] = useState(income); 
  console.log(income,expense)

  const handleClick = () => {
    setIsData(!isData);
    setData(isData ? expense : income); 
  };

  return (
    <div className="w-5/6 m-5 bg-white flex flex-col border-2 h-[400px] rounded-lg shadow-lg gap-2">
      <h1 className="text-xl font-bold mx-4 my-3 text-center">
        {isData ? "Income Categories" : "Expense Categories"}
      </h1>
      <hr className="border-2 border-[blueviolet]" />
      {Object.entries(data).map(([key, value]) => (
                <span
          key={key}
          className="p-2 flex justify-between space-y-1 border-2 w-[93%] m-auto shadow-md rounded-lg"
        >
          <p className="text-lg font-sans font-semibold">{key}</p>
          <p className="text-lg font-sans font-semibold">${value}</p>
        </span>
      ))}
      <div className="mx-5 p-3 flex justify-end items-center">
        <button
          onClick={handleClick}
          className="bg-[blueviolet] text-white p-2 text-md font-semibold font-sans rounded-xl shadow-lg"
        >
          <FontAwesomeIcon className="mr-3" icon={faRepeat} />
          {isData ? "Switch to Expenses" : "Switch to Income"}
        </button>
      </div>
    </div>
  );
};

export default DataChart;
