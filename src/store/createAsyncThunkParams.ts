import { createAsyncThunk } from "@reduxjs/toolkit";

// function for create common async thunk for get parametrize api on name configuration
const createAsyncThunkForGetApiWithParams: any = (name: any, apiUrl: any, requestParams: any) => {
    return createAsyncThunk(name, async (payload: any, { rejectWithValue }) => {
        try {
            const urlWithParams = apiUrl + requestParams(payload);
            const fetchConfig = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                },
            };
            const response = await fetch(urlWithParams, fetchConfig);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });
};

export default createAsyncThunkForGetApiWithParams;