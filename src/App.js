import { Searcher } from './components/Searcher';
import { Col } from 'antd';
import './App.css';
import { PokemonList } from './components/PokemonList';
import logo  from './assets/svg/logo.svg';
import { useEffect } from 'react';
import { getPokemonDetails, getPokemons } from './api';
import { setPokemons } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App(){
    const pokemons = useSelector( state => state.pokemons );
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            const pokemonDetailed = await Promise.all( pokemonsRes.map((pokemon) => getPokemonDetails(pokemon)));
            dispatch(setPokemons(pokemonDetailed));
        } 
        fetchPokemons();
    },[])
    return(
        <div className='App'>  
            <Col span={4} offset={10}> 
                <img src={logo} alt='Pokedux'/>
            </Col>
            <Col span={8} offset={8}>
                <Searcher/>
            </Col>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}



export default App;