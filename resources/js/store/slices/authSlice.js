import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    loading: false,
    error: null,
};

// export const authUser = createAsyncThunk("userAuthentication", async () => {
//     try {
//         const response = await fetch("/login");
//         const user = await response.json();
//         return user;
//     } catch (error) {
//         throw Error("Failed to fetch users");
//     }
// });

export const authUser = createAsyncThunk(
    "userAuthentication",
    async (credentials) => {
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Failed to authenticate user");
            }

            const user = await response.json();
            return user;
        } catch (error) {
            throw new Error("Failed to authenticate user");
        }
    }
);

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
