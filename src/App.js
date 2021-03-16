import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";


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

          <Route path="/contact"component={LandingPage} />
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


