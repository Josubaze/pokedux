import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';    
import { getPokemonDetails, getPokemons } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async ( _, {dispatch} ) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemons();
        const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {  // redux-toolkit por convencion maneja el type igual a nombreSlice/nombreAction
            state.pokemons = action.payload; // confiamos en redux-toolkit y su trato para la inmutabilidad a través de immer
        },
        setFavorite: (state, action) => { 
            const currentPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        }
    },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;