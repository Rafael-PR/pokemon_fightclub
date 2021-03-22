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
                <div className="card" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                    <div className="card-header" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                        <h5>{name.toUpperCase()}</h5>
                    </div>

                    <div className="card-img" style={{backgroundColor:'white'}}>
                        <img src={pokemonData.sprites.front_default}/>
                    </div>

                    

                    <div class="hp-types" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                        <p className="hp-title">HP:</p>
                        <p className="hp-type">{pokemonData.stats[0].base_stat}</p>
                    </div>
                    
                    <div class="card-data" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                            <div className="Card__types">
                                {pokemonData.types.map(type => {
                                return (<div className="Card__type">{type.type.name}</div>)})}
                            </div>
                    </div>

                        <div class="hp-types" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                                <p className="title">Weight :</p>
                                <p className="card-content">{pokemonData.weight}</p>
                        </div>

                        <div class="hp-types" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                            <p className="title">Height :</p>
                            <p>{pokemonData.height}</p>
                        </div>
                        {/* <div class="hp-types" style={{backgroundColor:'rgb(45, 111, 182)'}}>
                            <p className="title">Ability</p>
                            <p>{pokemonData.abilities[0].ability.name}</p>
                        </div> */}

                    <div className="Card__info" >
                    
                    
                    
            </div>

            <MDBPopover placement='bottom' popover clickable id='popper2' >
                <MDBBtn color="yellow" >Show more details</MDBBtn>
                    <div>
                    <MDBPopoverHeader>DETAILS</MDBPopoverHeader>
                    <MDBPopoverBody color="yellow">
                           
                            <p className="hp-title" >Attack:</p>
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


            
            <MDBBtn onClick={selectPokemon} color="yellow">Choose Pokemon</MDBBtn>
            


            

                    
                    {/* <button type="button" class="btn btn-primary" color="yellow" onClick={selectPokemon} >Choose Pokemon</button> */}
                </div>

                
            
            </div>
            
        </React.Fragment>
    )
}

export default PokemonCard;
