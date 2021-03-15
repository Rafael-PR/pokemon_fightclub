import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";

import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar'


function App() {
  
  return (<>
   <NavBar/>
   
   <LandingPage/>
   <Footer />
  </>

    
  );
}

export default App;



{/* < >   
<div class="container-fluid" >

    <div style={{
        backgroundColor: 'yellow',
        backgroundImage:
        `url(${process.env.PUBLIC_URL + '/img/colorful.jpg'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
    }}>    
  
      <div class="container-fluid" >
        <div class="row">
            <div class="col-12">
            <Header />
            </div>
        </div>
        <div class="row">
             <div class="col-4">
            </div>
            
            <div class="col-4">
            </div>
        </div>
  
      </div>
  
     




      <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 ">
            </div>
            <div class="col-md-6 ">
                <LandingPage />
            </div>
            <div class="col-md-3 ">
            </div>
        </div>
      </div>
    
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-8 bg-primary">
            <p class="lead">lorem40 sdvnafvnaoefnvldfvsdfdsfvdfvdfvdsfvfdaibvufbsdfbdbbdbfffdbfbfdbsgdbgdfbdsgsdgdbdsbavuibubfvafbfbfbbwbwrbgvfbvibvjbvbsdvbsdbvsbjdvskdbvbvdjkbsajbvksabvsl</p>

          </div>
          <div class="col-md-4 bg-warning">
            <p class="lead">Lorem 40 dsvibasbvsdvnösdnvöndsvnsdvnlödsnvksdnvönsajvnösadvknkasvnönfvnkafndsvnfvnsdvnkasnv</p>
            
          </div>
          {/* <Switch>
          <Route path="/landing">
            <About />
          </Route>
          <Route path="/chooseCharacter">
            <Users />
          </Route>
          <Route path="/playing">
            <Home />
          </Route>
        </Switch> */}

      //   </div>

      //   <Footer />

      // </div>
      // </div> 
      // </div>
      // </>  */}