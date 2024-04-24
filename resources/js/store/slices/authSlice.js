import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CommonService from '../../gateway/CommonService'

const initialState = {
    user: [],
    loading: false,
    error: null,
};

export const authUser = createAsyncThunk("userAuthentication", async (data) => {
    try {
        const response = await CommonService.createOrUpdate(data, 'login');
        return response;
    } catch (error) {
        throw Error("Failed to fetch users");
    }
});





const authSlice = createSlice({
    name: "user-authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
