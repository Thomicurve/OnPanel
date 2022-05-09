import { configureStore } from "@reduxjs/toolkit";
import { TasksReducer } from '../reducers/TasksReducer';

export default configureStore({
    reducer: TasksReducer
})