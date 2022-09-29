import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
              existingItem.name = action.payload.name;
              state.push(action.payload);
            }
        }
    }
});

export const {addTask, deleteTask, editTask} = tasksSlice.actions;

export default tasksSlice.reducer;