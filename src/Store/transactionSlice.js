import { createSlice } from "@reduxjs/toolkit";


const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        isView:false,
        toggleLogin:false,
        toggleMenu:false,
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
    }
    }
});
export const {switchView,ToggleView,ToggleLogin,ToggleMenu} =transactionSlice.actions;
export default transactionSlice.reducer;