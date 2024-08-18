import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";
import IncomeSlice from "./IncomeSlice";
import loginslice from "./loginslice";
import ExpenseSlice from "./expenseSlice";
const appStore=configureStore({
    reducer:{
     view:transactionSlice,
     income:IncomeSlice,
     login:loginslice,
     expense:ExpenseSlice,
    },
});
export default appStore;