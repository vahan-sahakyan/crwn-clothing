import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
  emailSignInStart,
  googleSignInStart,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
} from './user.actions';
import { USER_ACTION_TYPES } from './user.types';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// case USER_ACTION_TYPES.SET_CURRENT_USER:
const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction): UserState => {
  if (emailSignInStart.match(action) || googleSignInStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      error: null,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      error: null,
    };
  }
  if (
    //
    signInFailure.match(action) ||
    signUpFailure.match(action) ||
    signOutFailure.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};

export default userReducer;
