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
      <Link to="/">
        <button> HOME</button>
      </Link>
      <Link to="/hats">
        <button>HATS</button>
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
