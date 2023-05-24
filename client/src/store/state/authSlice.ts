import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
name: string | null;
token: string | null;
}

const initialState: AuthState = {
    name: null,
    token: localStorage.getItem('token'),
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ name: string; token: string }>
        ) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        defaultState: (state) => {
            state.name = null;
            state.token = null;
        },
    },
});

export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;