import { getPokemonDetails } from "../../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

 
export const getPokemonsWithDetails = (pokemons = [])=> async (dispatch)=> { 
    const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)))
    dispatch(setPokemons(pokemonsDetailed))
}

export const setLoading = (payload) => {
    return {
        type: 'SET_LOADING',
        payload
    }
}

export const setFavorite = (payload) => {
    return {
        type: 'SET_FAVORITE',
        payload
    }
}