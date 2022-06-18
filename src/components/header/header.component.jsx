import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles.jsx';

const Header = props => {
  const { currentUser, hidden, signOutStart } = props;
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/'>HOME</OptionLink>
        <OptionLink to='/shop'>SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// Passing props to <Header /> directly from REDUX
// instead of <Header currentUser={this.state.currentUser} />
// {state.user} === user.reducer.js (I GUESS)
const mapStateToProps = () => {
  return createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
