import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";
import IncomeSlice from "./IncomeSlice";

const appStore=configureStore({
    reducer:{
     view:transactionSlice,
     income:IncomeSlice,
    },
});
export default appStore;