import { createAction } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";
import { Dispatch } from "redux";

const selectHotelRoom = createAction<any[]>(`hotelDetails/${ACTIONS.SET_SELECTED_HOTEL_ROOM}`);
const selectHotel = createAction<any[]>(`hotelDetails/${ACTIONS.SET_SELECTED_HOTEL}`);
const selectedHoteRoomPricing = createAction<any[]>(`hotelDetails/${ACTIONS.SET_SELECTED_HOTEL_ROOM_PRICING}`);

export const setSelectHotelRoom: any = (roomSelected: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(selectHotelRoom(roomSelected))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
} 

export const setSelectedHotel: any = (hotelSelected: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(selectHotel(hotelSelected))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
} 

export const setSelectedHotelRoomPricing: any = (roomPricing: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(selectedHoteRoomPricing(roomPricing))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
} 