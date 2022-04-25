import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import CustomButton from './components/custom-button/custom-button.component.jsx';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from '../src/components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }
  componentDidMount() {
    //
  }
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-container">
            <Link to="/crwn-clothing/">
              <CustomButton> HOME</CustomButton>
            </Link>
            <Link to="/crwn-clothing/shop">
              <CustomButton>SHOP</CustomButton>
            </Link>
          </div>
        </nav>

        <Header />

        <Switch>
          <Route exact path="/crwn-clothing/" component={HomePage} />
          <Route path="/crwn-clothing/shop/" component={ShopPage} />
          <Route path="/crwn-clothing/signin" component={SignInAndSignUpPage} />

          <Route path="/crwn-clothing/hats/" component={ItemPage} />
        </Switch>
        <div style={{ height: '70px' }} />
      </div>
    );
  }
}

export default App;
