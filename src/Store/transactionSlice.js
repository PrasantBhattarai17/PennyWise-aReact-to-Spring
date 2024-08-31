import { createSlice } from "@reduxjs/toolkit";


const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        isView:false,
        toggleLogin:false,
        toggleMenu:false,
        toggleIncome:false,
        toggleExpense:false,
    },
    reducers:{
    ToggleView:(state)=>{
        state.isView=false;
    },
    ToggleLogin:(state)=>{
        state.toggleLogin=!state.toggleLogin;
    },
    ToggleMenu:(state)=>{
        state.toggleMenu=!state.toggleMenu
    },
    ToggleIncome:(state)=>{
        state.toggleIncome=!state.toggleIncome;
    }
    ,
    ToggleExpense:(state)=>{
        state.toggleExpense=!state.toggleExpense;
    }
}
});
export const {switchView,ToggleView,ToggleLogin,ToggleMenu,ToggleIncome,ToggleExpense} =transactionSlice.actions;
export default transactionSlice.reducer;