import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBMask } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterPage = () => {
  return (
    
    <MDBFooter  className="font-small" style={{
            backgroundImage:
            `url(${process.env.PUBLIC_URL + '/img/pokemon-screensaver.jpg'})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
    }}>
   <MDBMask overlay="blue-light" >
      <MDBContainer fluid className="text-center text-md-left pt-5" >
          
        <MDBRow >
          <MDBCol md="6" >
            <h4>
              This is a project which evolved during a WBS Coding School Course. We are the proud conducters of this fighting area where nobody gets hurt. Feel free to connect on LinkedIn.
            </h4>
                             
            <MDBCol md="4" className="d-flex justify-content-between align-items-center bd-highlight mb-3 example-parent"  style={{ height: '150px' }}>     
                    <a href="https://github.com/Rafael-PR/pokemon_fightclub"><i class="fab fa-facebook-square fa-4x"></i></a>
                    <a href="https://github.com/Rafael-PR/pokemon_fightclub"><i class="fab fa-github fa-4x"></i></a>
                    <a href="https://github.com/Rafael-PR/pokemon_fightclub"><i class="fab fa-youtube fa-4x"></i></a>
            </MDBCol> 

          </MDBCol>
          <MDBCol md="6" >
         
            <MDBContainer>
            <MDBRow> 
              <MDBCol md="1"></MDBCol>
              <MDBCol md="9"><h4 className="text-center">Coded with love by</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow >
              <MDBCol md="1"></MDBCol>
              <MDBCol  md="3">
              <img src={process.env.PUBLIC_URL + '/img/Christimon1.png'} width="160"/>
              <img src={process.env.PUBLIC_URL + '/img/Christimon.png'}width="200" />
              </MDBCol>
              <MDBCol md="3" >
              <img src={process.env.PUBLIC_URL + '/img/Selmasam1.png'} width="160" />
              <img src={process.env.PUBLIC_URL + '/img/Selmasam.png'} width="200"/>
              </MDBCol >
              <MDBCol  md="3">
              <img src={process.env.PUBLIC_URL + '/img/Razason.png'} width="160"/>
              <img src={process.env.PUBLIC_URL + '/img/Rafazar.png'} width="180"/>
              </MDBCol>
            
              <MDBCol md="2"></MDBCol>
            </MDBRow>
            </MDBContainer>
              
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Rafmon, Selmon, Christmon </a>
        </MDBContainer>
      </div>
     </MDBMask> 
    </MDBFooter>
  
  );
}

export default FooterPage;


{/* <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center" >
            <img src={process.env.PUBLIC_URL + '/img/FightClub.png'} style={{
                width:600,
            }}/>
            <MDBContainer size="sm" className="p-5" >
            <h3 >“The First Rule Of Fight Club Is: You Do Not Talk About Fight Club. The Second Rule Of Fight Club Is: You Do Not Talk About Fight Club.”</h3><br />
            </MDBContainer>
            
              
            </MDBMask> */}