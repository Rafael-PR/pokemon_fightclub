import React,{useState} from "react";
import { useHistory } from "react-router-dom"
import { MDBPopover, MDBBtn, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
import '../style.css';


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
                        <h5>{name.toUpperCase()}</h5>
                    </div>

                    <div className="card-img">
                        <img src={pokemonData.sprites.front_default}/>
                    </div>

                    

                    <div class="hp-types">
                        <p className="hp-title">HP:</p>
                        <p className="hp-type">{pokemonData.stats[0].base_stat}</p>
                    </div>
                    
                    <div class="card-data">
                            <div className="Card__types">
                                {pokemonData.types.map(type => {
                                return (<div className="Card__type">{type.type.name}</div>)})}
                            </div>
                    </div>

                        <div class="list-group-item">
                                <p className="title">Weight</p>
                                <p className="card-content">{pokemonData.weight}</p>
                        </div>

                        <div class="list-group-item">
                            <p className="title">Height</p>
                            <p>{pokemonData.height}</p>
                        </div>
                        <div class="list-group-item">
                            <p className="title">Ability</p>
                            <p>{pokemonData.abilities[0].ability.name}</p>
                        </div>

                    <div className="Card__info">
                    
                    
                    
            </div>

            <MDBPopover placement='bottom' popover clickable id='popper2'>
                <MDBBtn>Show more details</MDBBtn>
                    <div>
                    <MDBPopoverHeader>DETAILS</MDBPopoverHeader>
                    <MDBPopoverBody>
                           
                            <p className="hp-title">Attack:</p>
                            <p className="hp-type">{pokemonData.stats[1].base_stat}</p>
                            <p className="hp-title">Defense:</p>
                            <p className="hp-type">{pokemonData.stats[2].base_stat}</p>
                            <p className="hp-title">Special Attack:</p>
                            <p className="hp-type">{pokemonData.stats[3].base_stat}</p>
                            <p className="hp-title">Special Defense:</p>
                            <p className="hp-type">{pokemonData.stats[4].base_stat}</p>
                            <p className="hp-title">Speed:</p>
                            <p className="hp-type">{pokemonData.stats[5].base_stat}</p>
                        
                    </MDBPopoverBody>
                    </div>
            </MDBPopover>


            
            


            

                    
                    <button type="button" class="btn btn-primary" onClick={selectPokemon}>Choose Pokemon</button>
                </div>

                
            
            </div>
            
        </React.Fragment>
    )
}

export default PokemonCard;
