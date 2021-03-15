import React from 'react'
import PokemonCard from './PokemonCard'
import Pokemon_1 from '../assets/images/Pokemon_1.png';
import Pokemon_2 from '../assets/images/Pokemon_2.jpeg';
import Pokemon_3 from '../assets/images/Pokemon_3.png';
import Pokemon_5 from '../assets/images/Pokemon_5.png';




const PokemonCardFrame = () => {
    return (
        <React.Fragment>

        <div className="row">
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </div>
            
            
            
        </React.Fragment>
    )
}

export default PokemonCardFrame;
