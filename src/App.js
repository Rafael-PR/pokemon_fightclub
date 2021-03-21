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

  const[pokemon, setPokemon] = useState();
  const [chosenPokemon, setChosenPokemon]= useState();
  const [pageOffset, setPageOffset] =useState(0)
  const [totalResults, setTotalResults]=useState()

 

  useEffect(()=>{

      const getPokemons = async () => {
          let allPokeData = []
          let countResult
          try {
              const { data: pokemonData } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${pageOffset*20}`)
              countResult= pokemonData.count
              const individualPokemonData = pokemonData.results.map(async poke => {
                  const pokeData = await axios.get(poke.url)
                  return pokeData
              })
              Promise.all(individualPokemonData)
                  .then((result) => {
                      result.forEach(poke => {
                          allPokeData.push(poke.data) 
                      })
                      setPokemon(allPokeData);
                      setTotalResults(countResult)
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

  },[pageOffset])

  const handleChoosePokemon = (Pokemon) => {
    setChosenPokemon(Pokemon)
  }
  const pageChangesHandler = (e) =>{
    console.dir(e.target)
    const page= parseInt(e.target.innerText)
    if (page){
      setPageOffset((page-1))
    }
    if (e.target.textContent=== "«" && pageOffset>0){
      setPageOffset((pageOffset-1))
    }
    if (e.target.textContent=== "»"){
      setPageOffset((pageOffset+1))
    }
   
    
    // setPageOffset((page-1)*20)
  }
  
  return (<>
    
  <NavBar/>
  <Switch>
          <Route path="/arena" render={(props) => chosenPokemon && <Arena {...props} totalCount={totalResults} fightPokemon={chosenPokemon} />}/>
          <Route path="/contact"component={LandingPage} />
          <Route path="/choosePlayer">
                <Dashboard pokemon={pokemon} totalCount={totalResults} onChoosePokemon={handleChoosePokemon} pageHandler={pageChangesHandler}/>
          </Route>
          <Route exact path="/"component={LandingPage} />
  </Switch>
  <Footer />

  </>
    
  );
}

export default App;


