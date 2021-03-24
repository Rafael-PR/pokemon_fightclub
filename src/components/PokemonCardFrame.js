import React from 'react';
import PokemonCard from './PokemonCard';


const PokemonCardFrame = ({pokemon, onChoosePokemon}) => {
    return (
        <React.Fragment>
                <div className="row">
                    {pokemon && pokemon.map(onePokemon=>(
                    <PokemonCard
                        key={onePokemon.name}
                        pokemonData={onePokemon}
                        onChoosePokemon={onChoosePokemon}
                    />
                    ))}
                </div>
        </React.Fragment>
    )
}

export default PokemonCardFrame;
