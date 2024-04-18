import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon } from '../../services/pokemon.service.js';
import { nanoid } from 'nanoid';

export const cachePokemonResult = createAction('pokemon/fetch/cache');

export const fetchPokemonByName = createAsyncThunk(
    'pokemon/fetch',
    async (name, { getState, dispatch }) => {

        const { cache } = getState().pokemon.search;

        // Test la presence du pokemon dans le cache
        const pokemonCache = cache.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
        if(pokemonCache) {
            return pokemonCache;
        }

        // Si le pokemon n'est pas dans le cache
        // -> Requete 
        const data = await getPokemon(name);
        // -> Ajout dans le cache
        dispatch(cachePokemonResult(data));

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