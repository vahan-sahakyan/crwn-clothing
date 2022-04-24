import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import CustomButton from './components/custom-button/custom-button.component.jsx';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from '../src/components/header/header.component.jsx';

function ItemPage(props) {
  const { match } = props;
  const menuItem = match.path.split('/')[2].toUpperCase();
  console.log(`[ ${menuItem} PAGE ]`);

  console.log(match.url);
  console.log(match.path);
  return (
    <div className="homepage">
      <h1>{menuItem} PAGE</h1>
    </div>
  );
}

const App = () => {
  const home = '/crwn-clothing/';
  const urls = {
    home: home,
    hats: home + 'hats',
    shop: home + 'shop',
    signIn: home + 'signin',
  };
  const items = ['hats', 'jackets', 'sneakers', 'womens', 'mens'];

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <Link to={urls.home}>
            <CustomButton> HOME</CustomButton>
          </Link>
          <Link to={urls.shop}>
            <CustomButton>SHOP</CustomButton>
          </Link>
          {/* <Link to={`${urls.hats}`}>
            <button>HATS</button>
          </Link>
          <Link to={`${urls.hats}/3`}>
            <button>HATS/3</button>
          </Link> */}
        </div>
      </nav>

      <Header />

      <Switch>
        <Route exact path={urls.home} component={HomePage} />
        <Route path={`${urls.shop}/`} component={ShopPage} />
        <Route path={`${urls.signIn}/`} component={SignInAndSignUpPage} />

        <Route path={`${urls.hats}/`} component={ItemPage} />
        {items.map(item => (
          <Route path={`${home}${item}/`} component={ItemPage} />
        ))}
      </Switch>
      <div style={{ height: '70px' }} />
    </div>
  );
};

export default App;
