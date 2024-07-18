import { Searcher } from './components/Searcher';
import { Col } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import { PokemonList } from './components/PokemonList';
import logo  from './assets/svg/logo.svg';
import { useEffect } from 'react';
import { getPokemons } from './api';
import { setPokemons as setPokemonsAction } from './redux/actions';

function App({pokemons, setPokemons}){
    console.log(pokemons);
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonsRes = await getPokemons();
            setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
    pokemons : state.pokemons,
}); 
const mapDispatchToProps = (dispatch) => ({
    setPokemons : (value) => dispatch(setPokemonsAction(value)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);