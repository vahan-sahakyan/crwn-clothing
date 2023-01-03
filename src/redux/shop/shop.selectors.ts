import { createSelector } from 'reselect';

import { CollectionsState } from './shop.reducer';
import { Collection } from './shop.types';

const selectShop = (state: any): CollectionsState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: Collection[]) =>
    collections
      ? Object.keys(collections).map((key: any) => collections[key])
      : []
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
