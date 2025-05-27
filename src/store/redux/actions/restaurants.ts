import { createAction, Dispatch } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";

const restaurantsDataSet: any = createAction<any[]>(`cartDetails/${ACTIONS.SET_RESTAURANT_DATA_RESET}`);

export const setRestaurantsData: any = (restaurantData: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(restaurantsDataSet(restaurantData));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}