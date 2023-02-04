import { takeLatest, call, put, all } from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import { ShopActionTypes } from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionsMap = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield* put(fetchCollectionsFailure(error as Error));
  }
}

export function* fetchCollectionsStart() {
  // add Action Listener
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START, // event (Action)
    fetchCollectionsAsync // callback
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
