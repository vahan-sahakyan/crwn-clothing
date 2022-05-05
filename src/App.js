import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

// import CustomButton from './components/custom-button/custom-button.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from '../src/components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
  unsubscribeFromUath = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromUath = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromUath();
  }

  render() {
    return (
      <div>
        {/* <nav className="nav">
          <div className="nav-container">
            <Link to="/">
              <CustomButton> HOME</CustomButton>
            </Link>
            <Link to="/shop">
              <CustomButton>SHOP</CustomButton>
            </Link>
          </div>
        </nav> */}

        <Header />

        <Switch>
          <Redirect from="/crwn-clothing" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />

          <Route path="/hats" component={ItemPage} />
        </Switch>
        <div style={{ height: '70px' }} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
