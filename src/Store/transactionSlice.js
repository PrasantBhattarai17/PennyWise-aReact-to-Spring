import { createSlice } from "@reduxjs/toolkit";


const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        isView:false,
    },
    reducers:{
    switchView:(state)=>{
        state.isView=true;
    },
    ToggleView:(state)=>{
        state.isView=false;
    }
    }
});
export const {switchView,ToggleView} =transactionSlice.actions;
export default transactionSlice.reducer;