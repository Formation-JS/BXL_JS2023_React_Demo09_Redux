import { createReducer } from '@reduxjs/toolkit';
import { addPokemonTeam, cachePokemonResult, fetchPokemonByName, removePokemonTeam } from './pokemon.action.js';

const initialState = {
    search: {
        isLoading: false,
        current: null,
        error: null,
        cache: []
    },
    team: []
};

const pokemonReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchPokemonByName.pending, (state, action) => {
            state.search.isLoading = true;
            state.search.current = null;
            state.search.error = null;
        })
        .addCase(fetchPokemonByName.fulfilled, (state, action) => {
            const pokemonSearch = action.payload;

            state.search.isLoading = false;
            state.search.current = pokemonSearch;
        })
        .addCase(cachePokemonResult, (state, action) => {
            state.search.cache.push(action.payload);
        })
        .addCase(fetchPokemonByName.rejected, (state, action) => {
            state.search.isLoading = false;
            state.search.error = action.error.message;
        })
        .addCase(addPokemonTeam, (state, action) => {
            const pokemon = action.payload;

            state.team.push(pokemon);
        })
        .addCase(removePokemonTeam, (state, action) => {
            const pokemonId = action.payload;

            state.team = state.team.filter(poke => poke.id !== pokemonId);
        })

});

export default pokemonReducer;