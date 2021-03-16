import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Bootstrap & fontawesome ++++++++++++++++++++++++++++
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import '@fortawesome/fontawesome-free';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'video-react/dist/video-react.css'
//import 'bootstrap-css-only/css/bootstrap.min.css'; 

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import  'mdbreact/dist/css/mdb.css';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


