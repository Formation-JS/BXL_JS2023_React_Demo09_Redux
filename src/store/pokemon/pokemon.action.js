import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon } from '../../services/pokemon.service.js';
import { nanoid } from 'nanoid';


export const fetchPokemonByName = createAsyncThunk(
    'pokemon/fetch',
    async (name) => {
        const data = await getPokemon(name);
        return data;
    }
);

export const addPokemonTeam = createAction('pokemon/addTeam', (pokemon) => {
    return {
        payload: {
            ...pokemon,
            id: nanoid()
        }
    };
});

export const removePokemonTeam = createAction('pokemon/removeTeam', (id) => {
    return {
        payload: id
    }
});