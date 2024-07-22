import { Searcher } from './components/Searcher';
import { Col } from 'antd';
import './App.css';
import { PokemonList } from './components/PokemonList';
import logo  from './assets/svg/logo.svg';
import { useEffect } from 'react';
import { getPokemons } from './api';
import { getPokemonsWithDetails } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App(){
    const pokemons = useSelector( state => state.pokemons );
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            dispatch(getPokemonsWithDetails(pokemonsRes));
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