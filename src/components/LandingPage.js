import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { MDBBtn, MDBContainer } from "mdbreact";

export default () => {
  return (
  <>
    <main>
      <MDBContainer className="text-center my-5" >
      <h3 className="mb-5">Pokemon wisdom</h3>
        <p>Even if you lose in battle, if you surpass what you’ve done before, you have bested yourself. </p>
        <p>Marshal</p>
      </MDBContainer>
    
    <div>
    <MDBContainer className="text-center" >
    <iframe src="https://player.vimeo.com/video/315431464?autoplay=1&loop=1&color=5cd7d4&byline=0&portrait=0" width="1000" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </MDBContainer>
    </div>

    <MDBContainer className="text-center">
        <Link to="/choosePlayer" >
            <MDBBtn rounded outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball" alt="logo" style={{
                width:40}}/>  SELECT POKEMON</MDBBtn>
        </Link>
        </MDBContainer>
    </main>
    </>
  );
};