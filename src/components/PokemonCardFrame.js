import React from 'react';
import PokemonCard from './PokemonCard';


const PokemonCardFrame = ({pokemon, onChoosePokemon}) => {
    return (
        <React.Fragment>
            
                <div className="row">
                    {pokemon && pokemon.map(onePokemon=>(
                    <PokemonCard
                        key={onePokemon.name}
                        //Da die Pokemon alle einen untersch. Namen habe dient er als key/ID
                        pokemonData={onePokemon}
                        onChoosePokemon={onChoosePokemon}
                        //Könnte hier auch mit SpreadOperator arbeiten {..onePokemon}
                        //destructiert ist in PokemonCard in Line 12
                    />
                        ))}
                </div>
            
            
            
        </React.Fragment>
    )
}

export default PokemonCardFrame;
