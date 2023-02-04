import { takeLatest, put, all, call } from 'typed-redux-saga/macro';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  SignUpStart,
  EmailSignInStart,
  SignUpSuccess,
} from './user.actions';

import {
  auth,
  getCurrentUser,
  AdditionalInformation,
  signInWithGooglePopup,
  signOutUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, User } from 'firebase/auth';

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const { user } = yield call(signInWithGoogle);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}
export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const { user } = yield* call(createUserWithEmailAndPassword, auth, email, password);
    const additionalData = { displayName };
    yield* put(signUpSuccess(user, additionalData));
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: SignUpSuccess) {
  yield* getSnapshotFromUserAuth(user, additionalData);
}
//////////////////////////////
// Action Listeners
//////////////////////////////

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

//////////////////////////////
// ALL USER SAGAS
//////////////////////////////

export function* userSagas() {
  yield* all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
