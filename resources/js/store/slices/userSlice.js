import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    name: "Muhammad Ejaz",
    age: "36",
    status: "single",
    loading: false,
    error: null
};

export const fetchUsers = createAsyncThunk(
    'usersInformation',
    async () => { 
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            return users[0].name;
        } catch (error) {
            throw Error("Failed to fetch users");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload;
        },
        updateAge(state, action) {
            state.age = action.payload;
        },
        updateStatus(state, action) {
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { updateAge, updateName, updateStatus } = userSlice.actions;
export default userSlice.reducer;
