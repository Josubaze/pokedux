import { Searcher } from './components/Searcher';
import { Col, Spin } from 'antd';
import './App.css';
import { PokemonList } from './components/PokemonList';
import logo  from './assets/svg/logo.svg';
import { useEffect } from 'react';
import { getPokemons } from './api';
import { getPokemonsWithDetails, setLoading } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function App(){
    const pokemons = useSelector( state => state.get('pokemons')).toJS();
    const loading = useSelector( state => state.get('loading'));
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            dispatch( setLoading(true));
            const pokemonsRes = await getPokemons();
            dispatch(getPokemonsWithDetails(pokemonsRes));
            setTimeout(function() {
                dispatch( setLoading(false));
            }, 500); 
        } 
        fetchPokemons();
    },[])
    return(
        <div className='App'>  
            <Col span={4} offset={10}> 
                <img src={logo} alt='Pokedux'/>
            </Col>
            <Col span={8} offset={8}>
                <Searcher spinnig size='large'/>
            </Col>
            {loading ? ( 
            <Col offset={12}>
                <Spin size='large' spinning />
            </Col>
            ) : (
                <PokemonList pokemons={pokemons}/>
            )}
        </div>
    );
}



export default App;