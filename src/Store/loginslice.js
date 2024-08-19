import { createSlice } from "@reduxjs/toolkit";


const loginSlice=createSlice({
    name:'login',
    initialState:{
        username:null,
        authToken:null,
    },
    reducers:{
        addUser:(state,action)=>{
            state.username=action.payload;
        },
        setAuthToken:(state,action)=>{
            state.authToken=action.payload;
        },
    }
})

export const {addUser,setAuthToken}=loginSlice.actions;
export default loginSlice.reducer;