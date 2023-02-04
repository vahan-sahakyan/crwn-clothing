import { AnyAction } from 'redux';
import { fetchCollectionsFailure, fetchCollectionsStart, fetchCollectionsSuccess } from './shop.actions';
import { Collection } from './shop.types';

export type CollectionsState = {
  readonly collections: Collection[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const COLLECTIONS_INITIAL_STATE: CollectionsState = {
  collections: [],
  isLoading: false,
  error: null,
};

const shopReducer = (state = COLLECTIONS_INITIAL_STATE, action = {} as AnyAction): CollectionsState => {
  if (fetchCollectionsStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCollectionsSuccess.match(action)) {
    return { ...state, collections: action.payload, isLoading: false };
  }
  if (fetchCollectionsFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};

export default shopReducer;
