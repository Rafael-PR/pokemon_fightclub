import React,{useState} from "react";
import { useHistory } from "react-router-dom"

const PokemonCard = ({ pokemonData, onChoosePokemon}) => {
    const history = useHistory()
    const { name } = pokemonData

    const selectPokemon = () => {
        onChoosePokemon(pokemonData)
        history.push('/arena')
    }

    return (
        <React.Fragment>
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <h4>{name.toUpperCase()}</h4>
                        <img src={pokemonData.sprites.front_default}/>
                    </div>
                    <div className="card-body">Hier kommt dan ein Bild rein und evtl. noch die Superkraft</div>
                    <button type="button" class="btn btn-primary" onClick={selectPokemon}>Choose Pokemon</button>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default PokemonCard;
