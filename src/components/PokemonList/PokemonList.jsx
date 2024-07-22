import React from 'react';
import { PokemonCard } from '../PokemonCard';
import './PokemonList.css'; 
const PokemonList = ({ pokemons }) => {
    return (
        <div className='PokemonList'>
            {
                pokemons.map((pokemon) => {
                    return <PokemonCard 
                            key={pokemon.name}
                            name={pokemon.name} 
                            imageUrl={pokemon.sprites.front_default}
                            abilities={pokemon.abilities[0].ability.name }
                        />;
                })
            }
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill("")
}

export { PokemonList };
