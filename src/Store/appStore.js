import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";
import IncomeSlice from "./IncomeSlice";
import loginslice from "./loginslice";

const appStore=configureStore({
    reducer:{
     view:transactionSlice,
     income:IncomeSlice,
     login:loginslice
    },
});
export default appStore;