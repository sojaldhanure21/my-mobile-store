import { combineReducers } from "redux";
import { api } from "../api";
import productListingReducer, { productsState } from "./reducer/products";
import usersDataListingReducer, { usersState } from "./reducer/users";

export interface RootStatePersist {
    adminUserStates?: any;
    usersStates?: usersState
    productsStates?: productsState
    api?: ReturnType<typeof api.reducer>;
}

// combining all reducers
const rootReducer = combineReducers({
    usersStates: usersDataListingReducer,
    productsStates: productListingReducer,
    [api.reducerPath]: api.reducer,
})

export default rootReducer;