import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface usersState {
    loginResponse: any;
    signUpResponse: any;
}

const initialState: usersState = {
    loginResponse: { message: '' },
    signUpResponse: { message: '' }
};

// Common createAsyncThunk for APIs without params

export function createSimpleAsyncThunk<TResponse>(type: string, apiCall: () => Promise<TResponse>) {
    return createAsyncThunk<TResponse>(type, async () => {
        const response = await apiCall();
        return response;
    });
}

// Example usage:
// Suppose you have an API function like:
// const fetchProfile = () => api.getProfile();

// Then you can create a thunk:
// export const fetchProfileThunk = createSimpleAsyncThunk('users/fetchProfile', fetchProfile);

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
        builder.addMatcher(
            api.endpoints.signUp.matchRejected,
            (state, { payload }) => {
                state.signUpResponse = payload;
            }
        );
    }
});

export const { setLoginResponseReset } = usersSlice.actions;
export default usersSlice.reducer;