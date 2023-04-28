import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const signInClickSlice = createSlice({
    name: "signInClickStatus",
    initialState: {value:{status:true}},
    reducers: {
        passClickStatus1: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export  const {passClickStatus1} = signInClickSlice.actions;
export default signInClickSlice.reducer;