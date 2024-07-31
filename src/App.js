import { Searcher } from './components/Searcher';
import { Col, Spin } from 'antd';
import './App.css';
import { PokemonList } from './components/PokemonList';
import logo  from './assets/svg/logo.svg';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App(){
    const pokemons = useSelector( state => 
        state.data.pokemons, shallowEqual)
        //state.getIn(['data', 'pokemons'], shallowEqual)).toJS(); // el shallowEqual hace comparcion superficial que para este caso que son todos mejora el performance asi evitamos rerenders innecesarios.
    const loading = useSelector( state => 
        state.ui.loading);
        //state.getIn(['ui', 'loading'])); // no hace falta shallowEqual ya que solo es una propiedad
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonsWithDetails());
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