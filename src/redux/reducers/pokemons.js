import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
})

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            // return {
            //     ...state,
            //     pokemons: action.payload,
            // };
            return state.setIn(['pokemons'], fromJS(action.payload));
        case SET_FAVORITE:
            //const newPokemonList = [...state.pokemons]; // immutable asegura la inmutabilidad por lo que no hace falta una copia
            // const currentPokemonIndex = newPokemonList.findIndex(
            //     (pokemon) => {
            //         return pokemon.id === action.payload.pokemonId;
            //     }
            // )
            const currentPokemonIndex = state.get('pokemons').findIndex( // se usa un metodo de immutable llamado get y su propio findId
                    (pokemon) => {
                        return pokemon.get('id') === action.payload.pokemonId; // no se trabaja con notacion punto sino que tiene el metodo get ya menciando
                    }
            )

            if (currentPokemonIndex < 0) { // se mantiene validación
                return state;
            }

            // const isFavorited = state.get('pokemons').get(currentPokemonIndex).get('favorite'); // esto se puede hacer tambien con getIn
            const isFavorite = state.getIn([
                'pokemons',
                currentPokemonIndex,
                'favorite',
            ]);
            
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite); 
        default:
            return state;
    }
}