import createAsyncThunkForGetApiWithParams from "../../createAsyncThunkParams";
import { paramsInitialVal } from "../../../utility/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";


const baseUrl = 'https://dummyjson.com'

// search hotels api aync thunk
export const fetchHotelResultsApi: any = createAsyncThunkForGetApiWithParams(
    'data/products',
    baseUrl + '/products',
    (searchId: any) => ``
);

export interface productsState {
    productsApiData: any
}

const initialState: productsState = {
    productsApiData: paramsInitialVal,
};

export const productsSlice = createSlice({
    name: "productsListing",
    initialState,
    reducers: {
        [`${ACTIONS.SET_RESTAURANT_DATA_RESET}`]: (state, action: PayloadAction<any>) => {
            return { ...state, toDateStays: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotelResultsApi.pending, (state) => {
                state.productsApiData.loading = true;
                state.productsApiData.error = null;
            })
            .addCase(fetchHotelResultsApi.fulfilled, (state, action) => {
                state.productsApiData.loading = false;
                state.productsApiData.data = action.payload;
            })
            .addCase(fetchHotelResultsApi.rejected, (state, action) => {
                state.productsApiData.loading = false;
                state.productsApiData.error = action.payload;
            })
    }
});

export default productsSlice.reducer;