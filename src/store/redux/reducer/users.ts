import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";

export interface usersState {
    loginResponse: any;
}

const initialState: usersState = {
    loginResponse: { message: '' }
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoginResponseReset: (state, action: PayloadAction<any>) => {
            state.loginResponse = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.loginResponse = payload;
            }
        );
    }
});

export const { setLoginResponseReset } = usersSlice.actions;
export default usersSlice.reducer;