import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

function HatsPage(props) {
  console.log(props);
  return (
    <div className="homepage">
      <h1>HATS PAGE</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/crwn-clothing/">
            <button> HOME</button>
          </Link>
          <Link to="/crwn-clothing/hats">
            <button>HATS</button>
          </Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/crwn-clothing/" component={HomePage} />
        <Route path="/crwn-clothing/hats" component={HatsPage} />
      </Switch>
      <div style={{ height: '70px' }} />
    </div>
  );
};

export default App;
