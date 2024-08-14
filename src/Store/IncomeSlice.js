import { createSlice } from "@reduxjs/toolkit";


const IncomeSlice=createSlice({
    name:'income',
    initialState:{
        incomes:[]
    },
    reducers:{
        addUserIncome:(state,action)=>{
            state.incomes.push(action.payload);
        }
    }
});

export const {addUserIncome}=IncomeSlice.actions;
export default IncomeSlice.reducer;