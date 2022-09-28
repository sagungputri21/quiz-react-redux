import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './feature/todo/taskSlice';

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});