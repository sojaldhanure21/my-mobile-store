import { combineReducers } from "redux";
import globalStatesReducer, { GlobalStates } from "./reducer/globalStates"
import { api } from "../api";

export interface RootStatePersist {
    globalStates: GlobalStates;
    adminUserStates: any;
    productsStates: any
    api?: ReturnType<typeof api.reducer>;
}

// combining all reducers
const rootReducer = combineReducers({
    globalStates: globalStatesReducer,
    [api.reducerPath]: api.reducer,
})

export default rootReducer;