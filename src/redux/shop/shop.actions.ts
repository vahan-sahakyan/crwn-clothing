import { ShopActionTypes, Collection } from './shop.types';

import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

export type FetchCollectionsStart = Action<ShopActionTypes.FETCH_COLLECTIONS_START>;

export type FetchCollectionsSuccess = ActionWithPayload<ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, Collection[]>;

export type FetchCollectionsFailure = ActionWithPayload<ShopActionTypes.FETCH_COLLECTIONS_FAILURE, Error>;

export type CollectionAction = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFailure;

export const fetchCollectionsStart = withMatcher(
  (): FetchCollectionsStart => createAction(ShopActionTypes.FETCH_COLLECTIONS_START)
);

export const fetchCollectionsSuccess = withMatcher(
  (collectionsArray: Collection[]): FetchCollectionsSuccess =>
    createAction(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, collectionsArray)
);

export const fetchCollectionsFailure = withMatcher(
  (errorMessage: Error): FetchCollectionsFailure =>
    createAction(ShopActionTypes.FETCH_COLLECTIONS_FAILURE, errorMessage)
);
