import { combineReducers } from 'redux-immutable'; // se usa una libreria por el immutable, de no ser asi se usa la de redux normal
import { pokemonsReducer } from './pokemons';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
    data: pokemonsReducer,
    iu: uiReducer
});

export default rootReducer;
