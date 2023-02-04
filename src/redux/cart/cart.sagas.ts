import { all, call, takeLatest, put } from 'typed-redux-saga/macro';

import { USER_ACTION_TYPES } from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield* put(clearCart());
}

export function* onSignOutSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield* all([call(onSignOutSuccess)]);
}
