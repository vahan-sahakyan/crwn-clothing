import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h1>SIGN IN</h1>
      <SignIn />
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
