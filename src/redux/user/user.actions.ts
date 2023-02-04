import { USER_ACTION_TYPES } from './user.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

import { AdditionalInformation, UserData } from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

export type UserCredentials = {
  email: string;
  password: string;
  displayName?: string;
};

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, UserCredentials>; // TODO: Payload
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>; // TODO: Payload
export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE, Error>; // TODO: Payload
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE, Error>; // TODO: Payload
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, UserCredentials>; // TODO: Payload
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalData: AdditionalInformation }
>; // TODO: Payload
export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE, Error>; // TODO: Payload

// GOOGLE SIGN-IN

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

// EMAIL SIGN-IN

export const emailSignInStart = withMatcher(
  (userCredentials: UserCredentials): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, userCredentials)
);

// SUCCESS & FAILURE

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailure = withMatcher(
  (error: Error): SignInFailure => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)
);

// USER SESSION - PERSIST

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

// SIGN OUT

export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailure = withMatcher(
  (error: Error): SignOutFailure => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error)
);

// SIGN UP

export const signUpStart = withMatcher(
  (userCredentials: UserCredentials): SignUpStart => createAction(USER_ACTION_TYPES.SIGN_UP_START, userCredentials)
);

export const signUpSuccess = withMatcher(
  (user: User, additionalData: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalData })
);

export const signUpFailure = withMatcher(
  (error: Error): SignUpFailure => createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error)
);
