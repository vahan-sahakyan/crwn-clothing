import { ShopActionTypes, Collection, CollectionItem } from './shop.types';

import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchCollectionsStart =
  Action<ShopActionTypes.FETCH_COLLECTIONS_START>;

export type FetchCollectionsSuccess = ActionWithPayload<
  ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  Collection[]
>;

export type FetchCollectionsFailure = ActionWithPayload<
  ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  Error
>;

export type CollectionAction =
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsFailure;

export const fetchCollectionsStart = (): FetchCollectionsStart =>
  createAction(ShopActionTypes.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = (
  collectionsArray: Collection[]
): FetchCollectionsSuccess =>
  createAction(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, collectionsArray);

export const fetchCollectionsFailure = (
  errorMessage: Error
): FetchCollectionsFailure =>
  createAction(ShopActionTypes.FETCH_COLLECTIONS_FAILURE, errorMessage);
