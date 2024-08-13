import React from "react";
import MoneyCard from "./MoneyCard";
import RecentTransactions from "./RecentTransactions";

const FinanceContainer = () => {
  return (
    <div className="max-h-screen bg-gray-100">
   <MoneyCard/>
   <RecentTransactions/>
    </div>
  );
};

export default FinanceContainer;
