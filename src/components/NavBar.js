import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
          <Router>
            <MDBNavbar color="bg " fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Pokekom FightClub</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">ARENA</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Fight</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
         
          <MDBView src={process.env.PUBLIC_URL + '/img/pokemon-screensaver.jpg'}>
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

        <main>
          <MDBContainer className="text-center my-5" >
            <p align="justify">Ich will der allerbeste sein,
Wie keiner vor mir war.
Ganz allein fang ich sie mir,
Ich kenne die Gefahr.

Ich streife durch das ganze Land,
Ich suche weit und breit,
Das Pokemon um zu verstehen,
Was ihm diese Macht verleiht.

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Egal wie schwer mein weg auch ist
Ich nehme es in kauf
Ich will den Platz der mir gehört
Ich gebe niemals auf

Komm zeigen wir der ganzen Welt
Das wir Freunde sind
Gemeinsam zieh'n wir in den Kampf
Das besste Team gewinnt.

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Komm schnapp sie dir, komm und schnapp sie dir.
Komm und schnapp sie dir.
Komm und schnapp sie dir!

Pokemon
Komm' schnapp' sie dir.
(Nur ich und du)
In allem was ich auch tu
Pokemon
Oh mein bester Freund
Komm retten wir die Welt
Pokemon
Dein Herz ist gut
Wir vertrauen auf unseren Mut
Ich lern von dir und du von mir
Pokemon

Komm schnapp sie dir, komm und schnapp sie dir.
Pokemon</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default NavBar;