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
import Arena from './components/Arena';
import Contact from './components/Contact'
import LeaderBoard from './components/LeaderBoard';


function App() {

  const[pokemon, setPokemon] = useState();
  const [chosenPokemon, setChosenPokemon]= useState();
  const [pageOffset, setPageOffset] =useState(0);
  const [totalResults, setTotalResults]=useState(0);
  const [users, setUsers]=useState()

 

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


// useEffect(()=>{
//     fetch(`https://pokemon-fightclub.herokuapp.com/users`)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Request failed!');
//     }, networkError => {
//         alert("Connection failed, please try again");
//     })
//         .then((jsonResponse) => {
//             setUsers(jsonResponse);
//             console.log(jsonResponse)
//         })
// }, [])

useEffect(()=>{
  axios.get('https://pokemon-fightclub.herokuapp.com/users')
  .then(res=>{
      console.log(res)
      setUsers(res.data)
  })
  .catch(err=>{
      console.log(err)
  })
},[])


useEffect(()=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({"email":"ben@t-online.de","password":"passdsfsdfdft","myPokemonId":34,"enemyPokemonId":35,"winner":true});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://pokemon-fightclub.herokuapp.com/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
},[])


// const post= ()=> {fetch('https://pokemon-fightclub.herokuapp.com/users', {
//         method: 'POST',
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           "email": "Selmon@t-online.de",
//           "password": "passwort",
//           "myPokemonId": 30,
//           "enemyPokemonId": 40,
//           "winner": true
//         })
//     });
//   }




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
          <Route path="/contact"component={Contact} />
          <Route path="/choosePlayer" render={(props)=> pokemon && <Dashboard pokemon={pokemon} totalCount={totalResults} onChoosePokemon={handleChoosePokemon} pageHandler={pageChangesHandler}/>} />
          <Route path="/leaderBoard"component={LeaderBoard} />
          <Route exact path="/"component={LandingPage} />
    
  </Switch>
 
  <Footer />

  </>
    
  );
}

export default App;


