import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface KeyValue{
    key: string;
    value: string;
    description?: string;
}

export type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

export interface RequestData{
    url: string;
    method: Method;
    headers: KeyValue[];
    body: string;
    params: KeyValue[];
}

const initialState: RequestData = {
    url: "https://api.example.com",
    method: "POST",
    headers: [
        { key: "Content-Type", value: "application/json", description: "The type of content being sent" },
        { key: "Authorization", value: "Bearer token", description: "Authorization token"},
    ],
    body: "{'key': 'value'}",
    params: [
        { key: "param1", value: "value1" },
        { key: "param2", value: "value2" },
    ],
}

const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        setUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
        setMethod: (state, action: PayloadAction<Method>) => {
            state.method = action.payload;
        },
        setHeaders: (state, action: PayloadAction<KeyValue[]> ) =>{
            state.headers = action.payload;
        },
        setBody: (state, action: PayloadAction<string>) => {
            console.log("Body set to", action.payload);
            state.body = action.payload;
        },
        setParams: (state, action: PayloadAction<KeyValue[]>) => {
            state.params = action.payload;
        }
    }
});

export const { setUrl, setMethod, setHeaders, setBody, setParams } = requestSlice.actions;
export default requestSlice.reducer;

