import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";

const appStore=configureStore({
    reducer:{
     view:transactionSlice,
    },
});
export default appStore;