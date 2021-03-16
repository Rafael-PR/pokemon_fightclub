import './App.css';

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
import Arena from './components/Arena'


function App() {
  
  return (<>
   <NavBar/>
   <Switch>
            <Route path="/arena" component={Arena}/>
            <Route path="/choosePlayer" component={Dashboard}/>
            <Route path="/contact"component={LandingPage} />
            <Route exact path="/"component={LandingPage} />
     
    </Switch>
   <Footer />

  </>

    
  );
}

export default App;


