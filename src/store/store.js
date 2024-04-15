import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todo.reducer.js';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: import.meta.env.DEV,
}) 