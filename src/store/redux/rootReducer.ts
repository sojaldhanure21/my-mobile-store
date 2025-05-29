import { combineReducers } from "redux";
import { api } from "../api";
import productListingReducer ,{ productsState } from "./reducer/products";

export interface RootStatePersist {
    adminUserStates?: any;
    productsStates?: productsState
    api?: ReturnType<typeof api.reducer>;
}

// combining all reducers
const rootReducer = combineReducers({
    productsStates: productListingReducer,
    [api.reducerPath]: api.reducer,
})

export default rootReducer;