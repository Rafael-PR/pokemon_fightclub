import React from 'react';
import '../style.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';




const LeaderBoard = () => {
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
        <tr>
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
        </tr>
      </MDBTableBody>
    </MDBTable>


        </>
    )
}

export default LeaderBoard
