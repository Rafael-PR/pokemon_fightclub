import {React, useState, useEffect}  from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBPopoverBody, MDBPopoverHeader, MDBPopover} from 'mdbreact';
import '../style.css';

const Arena = ({fightPokemon, totalCount}) => {

   
   
    
    const [enemy, setEnemy]= useState();
    const [hp, setHp] = useState();
    const [wait, setWait]= useState()

    useEffect(()=>{
        setWait(true)
    }, [hp])
  
    
    const generateRandomAttack = ()=>{
    return Math.floor(Math.random() *20)
    }
  

    const fight = ()=>{
            if (!hp) setHp({poke1: fightPokemon.stats[0].base_stat, poke2: fightPokemon.stats[0].base_stat})
            setHp((prevState)=>({...prevState, poke2 : prevState.poke2-(generateRandomAttack())}))
            setTimeout(attack, 1000)
    }
    const attack = ()=>{          
            
            setHp((prevState)=>({ poke1 : prevState.poke1-(generateRandomAttack()),poke2: prevState.poke2}))
            setWait(false)
    }
    const defense= ()=>{
        if (fightPokemon.stats[2].base_stat > enemy.stats[2].base_stat){
            setHp((prevState)=>({poke1: prevState.poke1 + generateRandomAttack(), poke2 : prevState.poke2 }))
        } else {
            alert("You are too weak for a defence, your enemy gets extra points")
            setHp((prevState)=>({poke1: prevState.poke1 ,poke2 : prevState.poke2+ generateRandomAttack() }))
        }
    }
    const counter= ()=>{
 
    if (hp) {
        if (hp.poke1 && hp.poke1 <1) return "You lost the fight!"
        if (hp.poke2 && hp.poke2 <1) return "You win the fight!"
        return hp.poke1
    }
    else return fightPokemon.stats[0].base_stat
}
const counter2= ()=>{
 
    if (hp) {
        if (hp.poke1 && hp.poke1 <1) return "I gotcha!"
        if (hp.poke2 && hp.poke2 <1) return 0
        return hp.poke2
    }
    else return enemy.stats[0].base_stat
}

    // const fight = () => {
        //       // Naming for Readability
        //       const pokeOne = data[0].name_upper;
        //       const pokeTwo = data[1].name_upper;
        //       let hpOne = data[0].stats[0].base_stat;
        //       let hpTwo = data[1].stats[0].base_stat;
        //       const attOne = data[0].stats[1].base_stat;
        //       const attTwo = data[1].stats[1].base_stat;
        //       const defOne = data[0].stats[2].base_stat;
        //       const defTwo = data[1].stats[2].base_stat;
        //       const battleLog = document.querySelector(".battleLog");
        //       battleLog.innerHTML = "";
        //       setHp([100, 100]);

        // const battleLoop = () => {
        //             if (hpOne <= 0) {
        //               if (hpTwo <= 0) {
        //                 battleLog.innerHTML += `<p>What a disaster! Both pokemon faint!</p>`;
        //               } else {
        //                 battleLog.innerHTML += `<p>${pokeOne} faints</p>`;
        //               }
        //             } else if (hpTwo <= 0) {
        //               battleLog.innerHTML += `<p>${pokeTwo} faints</p>`;
        //             } else {
        //               // Highest Defense Value is 230
        //               // assign a random value to multiply with for every pokemon "chance"
        //               let randomOne = Math.random();
        //               let randomTwo = Math.random();
        //               battleLog.innerHTML += `<p>Round starts:</p>`;
        //               battleLog.innerHTML += `<p>${pokeOne} attacks for ${attOne}</p>`;
        //               hpTwo = hpTwo - Math.floor(attOne * randomOne * (1 - defTwo / 300)) < 0 ? 0 : hpTwo - Math.floor(attOne * randomOne * (1 - defTwo / 300));
        //               battleLog.innerHTML += `<p>${pokeTwo} defends with a value of ${defTwo} and takes ${Math.floor(attOne * randomOne * (1 - defTwo / 300))} damage.</p>`;
        //               battleLog.innerHTML += `<p>${pokeTwo} attacks for ${attTwo}</p>`;
        //               hpOne = hpOne - Math.floor(attTwo * randomTwo * (1 - defOne / 300)) < 0 ? 0 : hpOne - Math.floor(attTwo * randomTwo * (1 - defOne / 300));
        //               battleLog.innerHTML += `<p>${pokeOne} defends with a value of ${defOne} and takes ${Math.floor(attTwo * randomTwo * (1 - defOne / 300))} damage.</p>`;
        //               // Divide remaining HP by Original HP then multiply by 100 to get %
        //               setHp([(hpOne / data[0].stats[0].base_stat) * 100, (hpTwo / data[1].stats[0].base_stat) * 100]);
        //               setTimeout(battleLoop, 3000);
        //             }
        //           };
        //         //   battleLoop();
        //         };
    
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
        <div class="row test">  
        <div className="arena-header">Welcome to the Arena</div>
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
                    <MDBBtn outline color="info" onClick={fight} >Attack</MDBBtn>
                    <MDBBtn outline color="info" onClick={defense}>Defense</MDBBtn>
                    <MDBCardText className="mt-3">
                        Remaining HitPoints:
                        <p  className="text-center font-weight-bold" style={{fontSize:35, color:"#0394fc"}}>{counter()}</p>
                    </MDBCardText>
                    </MDBCardBody>
               
                </MDBCard>
            </MDBCol>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/Pokéball.png'} className={`pokeball ${wait? 'visible': 'invisible'}`} alt="logo" style={{
                width:40, height:40}}/>
            <div class="col-md d-flex justify-content-center">
            { enemy && <MDBCol >
            <MDBCardImage className="img-fluid" src={enemy.sprites.other["official-artwork"].front_default} waves />       
                <MDBCard style={{ width: "22rem" }} className="my-5">
                    <MDBCardBody>
                    <MDBCardTitle>{enemy.name.toUpperCase()}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn className="invisible" outline color="info" >Attack</MDBBtn>
                    <MDBBtn className="invisible" outline color="info" >Defense</MDBBtn>
                    <MDBCardText className="mt-3">
                        Remaining HitPoints:
                        <p  className="text-center font-weight-bold" style={{fontSize:35, color:"#0394fc"}}>{counter2()}</p>
                    </MDBCardText>
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

