import React,{useState} from "react";
import { useHistory } from "react-router-dom"

const PokemonCard = ({ pokemonData, onChoosePokemon}) => {
    const history = useHistory()
    const { name } = pokemonData

    const selectPokemon = () => {
        onChoosePokemon(pokemonData)
        history.push('/arena')
    }

    console.log(pokemonData)

    return (
        <React.Fragment>
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <h4>{name.toUpperCase()}</h4>
                        
                    </div>
                    <div className="card-body">
                        <img src={pokemonData.sprites.front_default}/>
                    </div>

                    <div class="card-header">
                        Abilities
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div className="Card__types">
                                {pokemonData.types.map(type => {
                                return (<div className="Card__type">{type.type.name}</div>)})}
                            </div>
                        </li>
                        <li class="list-group-item">
                            <p className="title">Weight</p>
                            <p>{pokemonData.weight}</p>
                        </li>
                        <li class="list-group-item">
                            <p className="title">Height</p>
                            <p>{pokemonData.height}</p>
                        </li>
                        <li class="list-group-item">
                            <p className="title">Ability</p>
                            <p>{pokemonData.abilities[0].ability.name}</p>
                        </li>


                    </ul>
                    

                    

                    <div className="Card__info">
                    
                    
                    
            </div>





                    <button type="button" class="btn btn-primary" onClick={selectPokemon}>Choose Pokemon</button>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default PokemonCard;
