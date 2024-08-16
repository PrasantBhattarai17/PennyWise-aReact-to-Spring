import React from "react";
import MoneyCard from "./MoneyCard";
import RecentTransactions from "./RecentTransactions";
import ChartContainer from "./Recharts/ChartContainer";

const FinanceContainer = () => {
  return (
    <div className="bg-gray-100">
   <MoneyCard/>
   <ChartContainer/>
   <RecentTransactions/>
    </div>
  );
};

export default FinanceContainer;
