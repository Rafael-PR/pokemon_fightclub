import React,{useState,useEffect} from 'react';
import '../style.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';





const LeaderBoard = () => {

  const [leaderBoardData, setLeaderBoardData]= useState()

  useEffect(()=>{
    fetch(`https://pokemon-fightclub.herokuapp.com/users/game`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        alert("Connection failed, please try again");
    })
        .then((jsonResponse) => {
            setLeaderBoardData(jsonResponse);
            console.log(jsonResponse)
        })
}, [])
    return (
        <>
                <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>Username</th>
          <th>MyPokemon</th>
          <th>Enemy Pokemon</th>
          <th>Winner</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {leaderBoardData && leaderBoardData.map((game)=> (<tr>
          <td>{game.user.username}</td>
          <td>{game.myPokemonId}</td>
          <td>{game.enemyPokemonId}</td>
          <td>{game.winner? "You won": "You lost"}</td>
        </tr>))}
        {/* <tr>
          <td>1</td>
          <td>Selma</td>
          <td>M</td>
          <td>Selma</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Christin</td>
          <td>T</td>
          <td>Christin</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Rafa</td>
          <td>P</td>
          <td>Rafa</td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>


        </>
    )
}

export default LeaderBoard
