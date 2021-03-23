import React from 'react'
import PokemonCardFrame from './PokemonCardFrame';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const Dashboard = ({pokemon, onChoosePokemon, pageHandler}) => {
    console.log(pokemon)
    return (
        <>
        <div className="row" style={{backgroundColor:'rgb(109,144,172, 0.7)'}}>
            <div className="col">
                <PokemonCardFrame pokemon={pokemon} onChoosePokemon={onChoosePokemon}/>
            </div>
        </div>
        <div className="row">
        <div className="col d-flex justify-content-center">
        <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5" onClick={pageHandler} >
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav >
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
        </div>
        </div>
        </>
    )
}

export default Dashboard
