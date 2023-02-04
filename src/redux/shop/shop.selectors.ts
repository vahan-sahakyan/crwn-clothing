import { createSelector } from 'reselect';

import { CollectionsState } from './shop.reducer';
import { CollectionMap } from './shop.types';

const selectShop = (state: any): CollectionsState => state.shop;
// FIXME type: any
export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], collections =>
  collections
    ? Object.keys(collections).map(key => collections[key as any]) // FIXME type: any
    : []
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectCollections], collections => (collections ? collections[collectionUrlParam] : null));

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isLoading);

export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);
