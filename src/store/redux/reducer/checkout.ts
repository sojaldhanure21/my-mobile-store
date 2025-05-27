import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ACTIONS } from "../constant/actions"
import { CartData, CartItem } from "../constant/types";

const initialCartIem: CartItem = {
    id: "",
    cartItems: []
}

const initialState : CartData = {
    cart: initialCartIem,
    travellerInfo: {}
}


const cartDetailsSlice = createSlice({
    name: 'cartDetails',
    initialState,
    reducers: {
        [`${ACTIONS.ADD_CHECKOUT_CART}`]: (state, action: PayloadAction<any>) => {
            return { ...state, cart: action.payload }
        },
        [`${ACTIONS.UPDATE_TRAVELLER_INFO}`]: (state, action: PayloadAction<any>) => {
            return { ...state, travellerInfo: action.payload }
        }
    }
});

export const { ADD_CHECKOUT_CART, UPDATE_TRAVELLER_INFO } = cartDetailsSlice.actions;
export default cartDetailsSlice.reducer;