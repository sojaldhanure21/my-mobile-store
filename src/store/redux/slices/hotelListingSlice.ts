import createAsyncThunkForGetApiWithParams from "@/store/createAsyncThunkParams";
import { paramsInitialVal, selectedHotelInfoProps } from "@/utils/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HotelResponse {
  status: string;
  hotels: any;
}

interface ParamsApiProps {
  data: any;
  loading: boolean;
  error: any
}

export interface SelectedHotelData {
  id: number,
  googlePlaceId: string,
  name: string,
  rate: any,
  isRecommended: boolean,
  geoCode: any,
  heroImage: string,
  starRating: number,
  selectionMetrics: any,
  distanceInKM: number,
  review: any
}


export interface hotelListingState {
  hotelList: HotelResponse;
  guid: string;
  initApiData: ParamsApiProps;
  startDate: any;
  endDate: any;
  selectedHotelInfo: SelectedHotelData;
  hotelResultData: any
}

const today = new Date();
const tomorrow = new Date();
today.setMonth(today.getMonth() + 5);
tomorrow.setDate(today.getDate() + 1);
tomorrow.setMonth(tomorrow.getMonth() + 5);

const initialState: hotelListingState = {
  hotelList: {
    status: '',
    hotels: []
  },
  guid: '',
  initApiData: paramsInitialVal,
  startDate: today,
  endDate: tomorrow,
  selectedHotelInfo: selectedHotelInfoProps,
  hotelResultData: paramsInitialVal
};

const baseUrl = 'https://orchestrator.api.dev.tripsby.ai'

// search hotels api aync thunk
export const fetchHotelResultsApi: any = createAsyncThunkForGetApiWithParams(
  'data/hotelResults',
  baseUrl + '/api/hotels/search',
  (searchId: any) => `/${encodeURIComponent(searchId)}/results`
);

export const fetchInitApi: any = createAsyncThunkForGetApiWithParams(
  'data/initApi',
  baseUrl + '/api/hotels/search',
  ({ searchString, startDateFormated, endDateFormated }: any) =>
    startDateFormated && endDateFormated ?
      `/${encodeURIComponent(searchString)}/init?sortBy=relevance&startDate=${encodeURIComponent(startDateFormated)}&endDate=${encodeURIComponent(endDateFormated)}`
      : `/${searchString}/init?sortBy=relevance`
);

export const hotelListingSlice = createSlice({
  name: "hotelListing",
  initialState,
  reducers: {
    setSelectedHotelInfo: (state, action: PayloadAction<SelectedHotelData>) => {
      state.selectedHotelInfo = action.payload;
    },
    setHotelResults: (state, action: PayloadAction<ParamsApiProps>) => {
      state.hotelResultData = action.payload;
    },
    setGuid: (state, action: PayloadAction<string>) => {
      state.guid = action.payload;
    },
    setResetInitApiData: (state, action: PayloadAction<any>) => {
      state.initApiData = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelResultsApi.pending, (state) => {
        state.hotelResultData.loading = true;
        state.hotelResultData.error = null;
      })
      .addCase(fetchHotelResultsApi.fulfilled, (state, action) => {
        state.hotelResultData.loading = false;
        state.hotelResultData.data = action.payload;
      })
      .addCase(fetchHotelResultsApi.rejected, (state, action) => {
        state.hotelResultData.loading = false;
        state.hotelResultData.error = action.payload;
      })
    builder
      .addCase(fetchInitApi.pending, (state) => {
        state.initApiData.loading = true;
        state.initApiData.error = null;
      })
      .addCase(fetchInitApi.fulfilled, (state, action) => {
        state.initApiData.loading = false;
        state.initApiData.data = action.payload;
      })
      .addCase(fetchInitApi.rejected, (state, action) => {
        state.initApiData.loading = false;
        state.initApiData.error = action.payload;
      })
  }
});

export const { setHotelResults, setGuid, setResetInitApiData, setStartDate, setEndDate, setSelectedHotelInfo } = hotelListingSlice.actions;

export default hotelListingSlice.reducer;
