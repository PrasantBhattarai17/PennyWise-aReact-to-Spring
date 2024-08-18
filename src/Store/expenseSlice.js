import { createSlice } from "@reduxjs/toolkit";


const ExpenseSlice=createSlice({
    name:'expense',
    initialState:{
        expenses:[]
    },
    reducers:{
        addUserExpense:(state,action)=>{
            state.expenses.push(action.payload);
        },
    }
});

export const {addUserExpense}=ExpenseSlice.actions;
export default ExpenseSlice.reducer;