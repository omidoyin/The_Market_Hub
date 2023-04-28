import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const PopAlertSlice = createSlice({
    name: "content",
    initialState: {value:{message:" ", color:"grey", classname:" popmessageoff", icon:""}},
    reducers: {
        passAlert: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export  const {passAlert} = PopAlertSlice.actions;
export default PopAlertSlice.reducer;