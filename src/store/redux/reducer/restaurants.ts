import createAsyncThunkForGetApiWithParams from "@/store/createAsyncThunkParams";
import { paramsInitialVal } from "@/utils/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";
const baseUrl = 'https://orchestrator.api.dev.tripsby.ai'


export const fetchRestaurantsApi: any = createAsyncThunkForGetApiWithParams(
    'data/restaurants',
    baseUrl + '/api/Restaurants/search',
    (searchId: any) =>
        `/${encodeURIComponent(searchId)}/results`
);

export interface restaurantState {
    restaurantApiData: any
}

const initialState: restaurantState = {
    restaurantApiData: paramsInitialVal,
};

export const restaurantSlice = createSlice({
    name: "restaurantListing",
    initialState,
    reducers: {
        [`${ACTIONS.SET_RESTAURANT_DATA_RESET}`]: (state, action: PayloadAction<any>) => {
            return { ...state, toDateStays: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurantsApi.pending, (state) => {
                state.restaurantApiData.loading = true;
                state.restaurantApiData.error = null;
            })
            .addCase(fetchRestaurantsApi.fulfilled, (state, action) => {
                state.restaurantApiData.loading = false;
                state.restaurantApiData.data = action.payload;
            })
            .addCase(fetchRestaurantsApi.rejected, (state, action) => {
                state.restaurantApiData.loading = false;
                state.restaurantApiData.error = action.payload;
            })
    }
});

export default restaurantSlice.reducer;