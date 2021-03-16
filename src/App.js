import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";

import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena'


function App() {

  const[pokemon, setPokemon] = useState()

  useEffect(()=>{

      const getPokemons = async () => {
          let allPokeData = []
          try {
              const { data: pokemonData } = await axios.get('https://pokeapi.co/api/v2/pokemon')
              // console.log(pokemonData.results)
              const individualPokemonData = pokemonData.results.map(async poke => {
                  const pokeData = await axios.get(poke.url)
                  return pokeData
              })
              Promise.all(individualPokemonData)
                  .then((result) => {
                      result.forEach(poke => {
                          allPokeData.push(poke.data) 
                      })
                      setPokemon(allPokeData)
                  })

                  
              // console.log(individualPokemon)
          } catch(e) {
              console.log(e)
          }
      }
      getPokemons()


      // axios.get('https://pokeapi.co/api/v2/pokemon')
      // .then(res=>{
      //     console.log(res.data)
      //     setPokemon(res.data['results'])
      // })
      // .catch(err=>{
      //     console.log(err)
      // })

  },[])

  const handleChoosePokemon = (chosenPokemon) => {
    console.log(chosenPokemon)
  }

  
  return (<>
    
  <NavBar/>
  <Switch>
            <Route path="/arena" component={Arena}/>
            <Route path="/choosePlayer">
                <Dashboard pokemon={pokemon} onChoosePokemon={handleChoosePokemon}/>
              </Route>
            <Route exact path="/"component={LandingPage} />
  </Switch>
  <Footer />
  </>
    
  );
}

export default App;



{/* < >   
<div class="container-fluid" >

    <div style={{
        backgroundColor: 'yellow',
        backgroundImage:
        `url(${process.env.PUBLIC_URL + '/img/colorful.jpg'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
    }}>    
  
      <div class="container-fluid" >
        <div class="row">
            <div class="col-12">
            <Header />
            </div>
        </div>
        <div class="row">
             <div class="col-4">
            </div>
            
            <div class="col-4">
            </div>
        </div>
  
      </div>
  
     




      <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 ">
            </div>
            <div class="col-md-6 ">
                <LandingPage />
            </div>
            <div class="col-md-3 ">
            </div>
        </div>
      </div>
    
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-8 bg-primary">
            <p class="lead">lorem40 sdvnafvnaoefnvldfvsdfdsfvdfvdfvdsfvfdaibvufbsdfbdbbdbfffdbfbfdbsgdbgdfbdsgsdgdbdsbavuibubfvafbfbfbbwbwrbgvfbvibvjbvbsdvbsdbvsbjdvskdbvbvdjkbsajbvksabvsl</p>

          </div>
          <div class="col-md-4 bg-warning">
            <p class="lead">Lorem 40 dsvibasbvsdvnösdnvöndsvnsdvnlödsnvksdnvönsajvnösadvknkasvnönfvnkafndsvnfvnsdvnkasnv</p>
            
          </div>
          {/* <Switch>
          <Route path="/landing">
            <About />
          </Route>
          <Route path="/chooseCharacter">
            <Users />
          </Route>
          <Route path="/playing">
            <Home />
          </Route>
        </Switch> */}

      //   </div>

      //   <Footer />

      // </div>
      // </div> 
      // </div>
      // </>  */}