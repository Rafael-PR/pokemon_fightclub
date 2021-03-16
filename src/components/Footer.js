import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBMask } from "mdbreact";

const FooterPage = () => {
  return (
    
    <MDBFooter  className="font-small  mt-4" style={{
            backgroundImage:
            `url(${process.env.PUBLIC_URL + '/img/pokemon-screensaver.jpg'})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
    }}>
  <MDBMask overlay="blue-light" >
      <MDBContainer fluid className="text-center text-md-left">
          
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Want to learn more? Click here?
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
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