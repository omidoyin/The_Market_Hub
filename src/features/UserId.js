import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const userIdSlice = createSlice({
    name: "userId",
    initialState: {value:{id:""}},
    reducers: {
        passId: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export  const {passId} = userIdSlice.actions;
export default userIdSlice.reducer;

