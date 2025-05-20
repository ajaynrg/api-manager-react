import { createSlice } from "@reduxjs/toolkit";

export const bodySlice = createSlice({
    name: "body",
    initialState: {
        value: JSON.stringify({hello:'123'}),
    },
    reducers: {
        setBody: (state, action) => {
            // console.log("setBody", action.payload);
            state.value = action.payload;
        },
        clearBody: (state) => {
            state.value = "";
        },
    },
});

export const { setBody, clearBody } = bodySlice.actions;