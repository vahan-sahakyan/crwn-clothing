import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FormContainer,
  SubmitContainer,
  SignInContainer,
} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email</span>

      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required
        />
        <SubmitContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </SubmitContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignIn;
