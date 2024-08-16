import { createSlice } from "@reduxjs/toolkit";


const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        isView:false,
        toggleLogin:false,
    },
    reducers:{
    switchView:(state)=>{
        state.isView=true;
    },
    ToggleView:(state)=>{
        state.isView=false;
    },
    ToggleLogin:(state)=>{
        state.toggleLogin=!state.toggleLogin;
    },
    }
});
export const {switchView,ToggleView,ToggleLogin} =transactionSlice.actions;
export default transactionSlice.reducer;