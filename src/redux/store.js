import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './feature/taskSlice';

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});