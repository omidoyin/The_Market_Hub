import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const signUpClickSlice = createSlice({
    name: "signUpClickStatus",
    initialState: {value:{status:true}},
    reducers: {
        passClickStatus: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export  const {passClickStatus} = signUpClickSlice.actions;
export default signUpClickSlice.reducer;