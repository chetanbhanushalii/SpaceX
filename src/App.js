import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Launchpads from './launchpad';
import Mission from './mission';

// import LaunchDetails from './services'

const  routing = (
  <BrowserRouter basename="chetanbhanushalii.github.io/SpaceX/">
      <div>
          <Route path="/" component={App} />
          <Route path="/launchpads" component={Launchpads} />
          <Route path="/mission" component={Mission} />
      </div>
  </BrowserRouter>
)

function App() {
  return (
    
    <nav className="navbar-nav">
    <h1 className="head-name">Welcome to SpaceX!</h1>
    <ul>
      <li>        
        <Link to="/">Home</Link>
        <span className="arrow-animation"> > </span>
      </li>
      <li>
        <Link to="/launchpads">Launchpads</Link>
        <span className="arrow-animation"> > </span>
      </li>
      <li>      
        <Link to="/mission">Missions</Link>
        <span className="arrow-animation"> > </span>
      </li>
    </ul>
  </nav>
  
  );
}

export default App;
