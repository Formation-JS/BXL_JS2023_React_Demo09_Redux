import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todo.reducer.js';
import pokemonReducer from './pokemon/pokemon.reducer.js';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        pokemon: pokemonReducer
    },
    devTools: import.meta.env.DEV,
}) 