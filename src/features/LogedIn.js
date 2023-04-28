import { createSlice } from '@reduxjs/toolkit';

export const LogedInSlice = createSlice({
    name: "logInstatus",
    initialState: {value:{status:false}},
    reducers: {
        passLogInStatus: (state, action)=>{
            state.value = action.payload;
        },
    },
});

export  const {passLogInStatus} = LogedInSlice.actions;
export default LogedInSlice.reducer;