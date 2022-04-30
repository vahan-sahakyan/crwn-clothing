import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = props => {
  const { currentUser, hidden } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/crwn-clothing/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/crwn-clothing/">
          HOME
        </Link>
        <Link className="option" to="/crwn-clothing/shop">
          SHOP
        </Link>
        {/* <Link className="option" to="/crwn-clothing/shop">
          CONTACT
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/crwn-clothing/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// Passing props to <Header /> directly from REDUX
// instead of <Header currentUser={this.state.currentUser} />
// {state.user} === user.reducer.js (I GUESS)
const mapStateToProps = state => {
  const {
    user: { currentUser },
    cart: { hidden },
  } = state;
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
