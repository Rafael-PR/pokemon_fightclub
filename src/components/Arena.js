import {React, useState, useEffect}  from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


const Arena = ({fightPokemon, totalCount}) => {

    
    const [enemy, setEnemy]= useState()
    
     useEffect(()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * totalCount)}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            }, networkError => {
                alert("Connection failed, please try again");
            })
                .then((jsonResponse) => {
                    setEnemy(jsonResponse);
                    console.log(jsonResponse)
                    console.log(fightPokemon)
                })
        }, [])

    return (
        <>
        <div class="container">
        <div class="row">  
        <div>Welcome to the Arena</div>
        </div>
        <div class="row">
            <div class="col-md">
            <MDBCol>
            <MDBCardImage className="img-fluid" src={fightPokemon.sprites.other["official-artwork"].front_default} waves/>
                <MDBCard style={{ width: "22rem" }} className="my-5">
                    <MDBCardBody>
                    <MDBCardTitle>{fightPokemon.name.toUpperCase()}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBCardText>
                    Choose your fighting style
                    </MDBCardText>
                    <MDBBtn outline color="info" >HitPoints</MDBBtn>
                    <MDBBtn outline color="info" >Experience</MDBBtn>
                    <MDBBtn outline color="info" >Cuteness</MDBBtn>
                    </MDBCardBody>
               
                </MDBCard>
            </MDBCol>
            </div>
            <div class="col-md d-flex justify-content-center">
            { enemy && <MDBCol>
            <MDBCardImage className="img-fluid" src={enemy.sprites.other["official-artwork"].front_default} waves />       
                <MDBCard style={{ width: "22rem" }} className="my-5">
                    <MDBCardBody>
                    <MDBCardTitle>{enemy.name.toUpperCase()}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBCardText>
                        Choose your fighting style
                    </MDBCardText>
                    <MDBBtn outline color="info" >HitPoints</MDBBtn>
                    <MDBBtn outline color="info" >Experience</MDBBtn>
                    <MDBBtn outline color="info" >Cuteness</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                
            </MDBCol>}
        
            </div>

        
        </div>
        <div class="row">
            <div class="col-md d-flex justify-content-center">
            <MDBBtn outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball" alt="logo" style={{
                width:40}}/>START FIGHT</MDBBtn>
        
            </div>
            </div>
        </div>


        </>
     
    )
}

export default Arena
