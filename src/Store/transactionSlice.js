import { createSlice } from "@reduxjs/toolkit";


const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        isView:false,
        toggleLogin:false,
    },
    reducers:{
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