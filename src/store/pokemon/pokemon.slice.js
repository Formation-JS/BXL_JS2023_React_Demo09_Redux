import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonByName } from './pokemon.action.js';

const initialState = {
    search: {
        isLoading: false,
        current: null,
        error: null,
        cache: []
    },
    team: []
};

const pokemonSlice = createSlice({
    initialState: initialState,
    name: 'pokemon',
    reducers: {
        removeTeam: (state, action) => {
            const pokemonId = action.payload;
            state.team = state.team.filter(poke => poke.id !== pokemonId);
        },
        addTeam: {
            prepare: (pokemon) => {
                return {
                    payload: {
                        ...pokemon,
                        id: nanoid()
                    }
                }
            },
            reducer: (state, action) => {
                const pokemon = action.payload;
                state.team.push(pokemon);
            }
        },
        cache: (state, action) => {
            state.search.cache.push(action.payload);
        }
    },
    extraReducers: builder => {
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
            .addCase(fetchPokemonByName.rejected, (state, action) => {
                state.search.isLoading = false;
                state.search.error = action.error.message;
            })
    }
})


export default pokemonSlice.reducer;

export const { 
    addTeam: addPokemonTeam,
    removeTeam: removePokemonTeam,
    cache: cachePokemonResult,
} = pokemonSlice.actions;