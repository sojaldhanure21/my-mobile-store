import { createAction, Dispatch } from "@reduxjs/toolkit";
import { AnyPtrRecord } from "dns";
import { ACTIONS } from "../constant/actions";

const addCheckoutCart: any = createAction<any[]>(`cartDetails/${ACTIONS.ADD_CHECKOUT_CART}`);
const updateCheckoutCart: any = createAction<any[]>(`cartDetails/${ACTIONS.UPDATE_CHECKOUT_CART}`);
const updateTravellerInfo: any = createAction<any[]>(`cartDetails/${ACTIONS.UPDATE_TRAVELLER_INFO}`);

export const updateTravellerInformation: any = (traveller: AnyPtrRecord) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(updateTravellerInfo(traveller));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const addToCheckoutCart: any = (cartDetails: AnyPtrRecord) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(addCheckoutCart(cartDetails));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const updateToCheckoutCart: any = (cartDetails: AnyPtrRecord) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(updateCheckoutCart(cartDetails));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}