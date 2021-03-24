import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }


  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
                <strong>Pokemon FightClub</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <Link to="/choosePlayer"></Link>
                  <MDBNavItem active>
                    <MDBNavLink  to="/choosePlayer">Choose Pokemon</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/LeaderBoard">History</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem> 
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

          <MDBView src={process.env.PUBLIC_URL + '/img/pokemon-screensaver.jpg'} >
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center" >
            <img src={process.env.PUBLIC_URL + '/img/FightClub.png'} style={{
                width:600,
            }}/>
            <MDBContainer size="sm" className="p-5" >
            <h3 >“The First Rule Of Fight Club Is: You Do Not Talk About Fight Club. The Second Rule Of Fight Club Is: You Do Not Talk About Fight Club.”</h3><br />
            </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default NavBar;