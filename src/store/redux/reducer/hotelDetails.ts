import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ACTIONS } from "../constant/actions"
import { hotelRoomSelectedState, RoomData } from "../constant/types";

const initialRoomState: RoomData = {
    id: "",
    standardRoomId: "",
    standardRoomName: "",
    name: "",
    description: "",
    beds: [],
    smokingAllowed: false,
    facilities: [],
    images: [],
    rates: [],
    partnerRoomRates: []
};

const initialState: hotelRoomSelectedState = {
    selectedHotelRoom: initialRoomState,
    selectedHotel: null,
    selectedHoteRoomPricing: null
};

const hotelDetailsSlice = createSlice({
    name: 'hotelDetails',
    initialState,
    reducers: {
        [`${ACTIONS.SET_SELECTED_HOTEL_ROOM}`]: (state, action: PayloadAction<any>) => {
            return { ...state, selectedHotelRoom: action.payload }
        },
        [`${ACTIONS.SET_SELECTED_HOTEL}`]: (state, action: PayloadAction<any>) => {
            return { ...state, selectedHotel: action.payload }
        },
        [`${ACTIONS.SET_SELECTED_HOTEL_ROOM_PRICING}`]: (state, action: PayloadAction<any>) => {
            return { ...state, selectedHoteRoomPricing: action.payload }
        }
    }
});

export const { SET_SELECTED_HOTEL_ROOM, SET_SELECTED_HOTEL } = hotelDetailsSlice.actions;
export default hotelDetailsSlice.reducer;