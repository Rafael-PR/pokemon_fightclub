import {React, useState, useEffect}  from 'react';
import {Link} from 'react-router-dom'
import { MDBContainer, MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';
import '../style.css';
import '../App.css'
import { Fireworks } from 'fireworks/lib/react'


const Alert = ({name}) => {
    return (
      <MDBContainer>
        <MDBAlert color="warning" dismiss>
          <strong>Holy guacamole!</strong> Your are too weak, you cannot defend yourself anymore.  <strong>{name}</strong> will get some extra points.
        </MDBAlert>
      </MDBContainer>
    );
  };




const Arena = ({fightPokemon}) => {


    const [enemy, setEnemy]= useState();
    const [endGame, setEndGame]= useState(false)
    const [hp, setHp] = useState();
    const [fightActive, setFightActive]= useState(false);
    const [enemyActive, setEnemyActive]= useState(false)
    const [defenceUsed, setDefenceUsed]= useState({used:false, toWeak: false});
    const [firework, setFirework]=useState(false)
  
//FIGHT LOGIC
    const generateRandomAttack = ()=>{
        return Math.floor(Math.random() *25)
        }
    const checkEnd = (att) =>{
            if (hp){
              if (hp.poke1-att <1) {
                  setHp((prevState)=>({poke1:"You lost the fight", poke2 : prevState.poke2}))
                  safeDataToBackend({myPokemonName: fightPokemon.name, enemyPokemonName :enemy.name, winner:false})
                  setEndGame(true)
                  return true
              }
          }}
      
    const checkEnd1= (att)=>{
          if (hp){
              if (hp.poke2-att <1) {
              setHp((prevState)=>({poke1:"Yeah you win the fight", poke2 : "You got me..arg"}))
              safeDataToBackend({myPokemonName: fightPokemon.name, enemyPokemonName :enemy.name, winner:true})
              setEndGame(true)
              setFirework(true)
              return true
          } else return false
      } else return false
      }
      

    const fight = ()=>{
            setFightActive(false)
            setEnemyActive(true)
            const att= generateRandomAttack()
            const gameEnd = checkEnd1(att)
            if (!gameEnd) {
                setHp((prevState)=>({...prevState, poke2 : prevState.poke2-att}))
                {setTimeout(attack, 1000)}
            }}
           

    const attack = ()=>{   
            setEnemyActive(false)      
            setFightActive(true)
            const att= generateRandomAttack()
            const gameEnd = checkEnd(att)
            if (!gameEnd) {setHp((prevState)=>({ poke1 : prevState.poke1-att,poke2: prevState.poke2}))}    
    }
    const defense= ()=>{
      
        if (fightPokemon.stats[2].base_stat > enemy.stats[2].base_stat){
            setHp((prevState)=>({poke1: prevState.poke1 + generateRandomAttack(), poke2 : prevState.poke2 }))
            setDefenceUsed({used:true, toWeak:false})
        } else {
            setHp((prevState)=>({poke1: prevState.poke1 ,poke2 : prevState.poke2+ generateRandomAttack() }))
            setDefenceUsed({used:true, toWeak:true})
        }
    }
    
    useEffect(()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898)}`)
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
                    if (!hp) setHp({poke1: fightPokemon.stats[0].base_stat, poke2: jsonResponse.stats[0].base_stat})
                })
    }, [])

 


    // FIREWORK
    let fxProps = {
        count: 3,
        interval: 1000,
        colors: ['purple', 'green', 'yellow'],
        calc: (props, i) => ({
        ...props,
          x: (i + 1) * (window.innerWidth / 4) - (i + 1) * 100,
          y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    //END GAME AND SAVE DATA IN BACKEND
    const safeDataToBackend = (game)=>{
           var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(
            {"user":{
                "_id":"605b5c9bdbab924ac8e063fa",
                "username":"benmon"},
            "myPokemonName": game.myPokemonName,
            "enemyPokemonName":game.enemyPokemonName ,
            "winner": game.winner.toString()});
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("https://pokemon-fightclub.herokuapp.com/users/game", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

    return (
        <>
        
        <div class="container" >
        <div class="row">  
        <MDBContainer className="d-flex justify-content-center m-5" >
          <img src={process.env.PUBLIC_URL + '/img/ShowtimeBanner2.png'} style={{width:100+"%", borderBottom: "3px solid rgb(109,144,172, 0.7)", borderTop: "3px solid rgb(109,144,172, 0.7)" }} />
        </MDBContainer>
        </div>

        <div class="row" >
            <div class="col">
            {firework && <Fireworks {...fxProps} />}
            <MDBCol className={fightActive? "bounce img-fluid": ""}>
            <MDBCardImage className="img-fluid bounceInLeft" src={fightPokemon.sprites.other["official-artwork"].front_default} waves/>
                <MDBCard style={{ width: "22rem" }} className="my-5">
                    <MDBCardBody>
                    <MDBCardTitle className="text-center">{fightPokemon.name.toUpperCase()}</MDBCardTitle>
                    {fightPokemon && <MDBCardText >
                    {fightPokemon.name} will use his abilities of {fightPokemon?.abilities[0]?.ability.name} and {fightPokemon?.abilities[1]?.ability.name} to attack
                    </MDBCardText>}
                    {!enemyActive &&
                    <>
                    <MDBBtn outline color="info" onClick={fight} className={endGame? "invisible": ""} >Attack</MDBBtn>
                    <MDBBtn outline color="info" onClick={defense} className={defenceUsed.used || endGame ?"invisible": ""}>Defense</MDBBtn>
                    </>}
                    <MDBCardText className="mt-3 text-center">

                        Remaining HitPoints:
                        <p  className="text-center font-weight-bold bounce" style={{fontSize:35, color:"#0394fc"}}>{hp? hp.poke1 : fightPokemon.stats[0].base_stat}</p>
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </div>
            
            <div class="col d-flex justify-content-center">
            { enemy? <MDBCol className={enemyActive? "bounce img-fluid": ""} >
            <MDBCardImage className="img-fluid bounceInRight" src={enemy.sprites.other["official-artwork"].front_default} waves />       
                <MDBCard style={{ width: "22rem" }} className="my-5">
                    <MDBCardBody>
                    <MDBCardTitle className="text-center">{enemy.name.toUpperCase()}</MDBCardTitle>
                    {enemy && <MDBCardText>
                    {enemy.name} will try to destroy you with {enemy?.abilities[0]?.ability.name} {enemy.abilities.length > 1 && "and"} {enemy?.abilities[1]?.ability.name}
                    </MDBCardText>}
                    <MDBBtn className="invisible" outline color="info" >Attack</MDBBtn>
                    <MDBBtn className="invisible" outline color="info" >Defense</MDBBtn>
                    <MDBCardText className="mt-3 text-center">
                        Remaining HitPoints:
                        <p  className="text-center font-weight-bold" style={{fontSize:35, color:"#0394fc"}}>{hp? hp.poke2 : enemy.stats[0].base_stat}</p>
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol> : <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball" alt="logo" style={{width:100, height:100}}/>}
            </div>
        </div>
        </div>
        {defenceUsed.toWeak && <Alert name={enemy.name}/>}
        <div class="row" className="mb-5">
            <div class="col-md d-flex justify-content-center">
            <Link to="/choosePlayer">
            <MDBBtn outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball mr-3" alt="logo" style={{
                width:40}}/>New Pokemon</MDBBtn>

            </Link>
            <Link to="/leaderBoard">
            <MDBBtn outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball mr-3" alt="logo" style={{
                width:40}}/>FIGHT HISTORY</MDBBtn>
            </Link>
            <Link to="/">
            <MDBBtn outline color="info" > 
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className="pokeball mr-3" alt="logo" style={{
                width:40}}/>Homepage</MDBBtn>
            </Link>
            </div>
            </div>

        </>
    )
}

export default Arena

