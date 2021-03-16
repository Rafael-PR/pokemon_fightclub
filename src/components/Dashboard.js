import React from 'react'
import PokemonCardFrame from './PokemonCardFrame';

const Dashboard = ({pokemon, onChoosePokemon}) => {
    return (
        <div className="row">
            <div className="col">
                <PokemonCardFrame pokemon={pokemon} onChoosePokemon={onChoosePokemon}/>
            </div>
        </div>
    )
}

export default Dashboard
