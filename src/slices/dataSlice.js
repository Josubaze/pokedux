import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pokemons: [],
}

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
console.log("🚀 ~ file: dataSlice.js:26 ~ dataSlice:", dataSlice)

export default dataSlice.reducer;