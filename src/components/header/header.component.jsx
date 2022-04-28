import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = props => {
  const { currentUser } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/crwn-clothing/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/crwn-clothing/shop">
          SHOP
        </Link>
        <Link className="option" to="/crwn-clothing/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/crwn-clothing/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

// Passing props to <Header /> directly from REDUX
// instead of <Header currentUser={this.state.currentUser} />
// {state.user} === user.reducer.js (I GUESS)
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
