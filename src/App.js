import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';

function HatsPage(props) {
  console.log('[ HATS PAGE ]');
  const { match } = props;

  console.log(match.url);
  console.log(match.path);

  return (
    <div className="homepage">
      <h1>HATS PAGE</h1>
    </div>
  );
}

const App = () => {
  const home = '/crwn-clothing';
  const urls = {
    home: home,
    hats: home + '/hats',
    shop: home + '/shop',
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <Link to={urls.home}>
            <button> HOME</button>
          </Link>
          <Link to={`${urls.shop}`}>
            <button>SHOP</button>
          </Link>
          {/* <Link to={`${urls.hats}`}>
            <button>HATS</button>
          </Link>
          <Link to={`${urls.hats}/3`}>
            <button>HATS/3</button>
          </Link> */}
        </div>
      </nav>

      <Switch>
        <Route exact path={urls.home} component={HomePage} />
        <Route path={`${urls.hats}/:id`} component={HatsPage} />
        <Route path={`${urls.hats}/`} component={HatsPage} />
        <Route path={`${urls.shop}`} component={ShopPage} />
      </Switch>
      <div style={{ height: '70px' }} />
    </div>
  );
};

export default App;
