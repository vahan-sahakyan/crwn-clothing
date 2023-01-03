import { CollectionAction } from './shop.actions';
import { ShopActionTypes, Collection } from './shop.types';

export type CollectionsState = {
  readonly collections: Collection[];
  readonly isFetching: boolean;
  readonly errorMessage: Error | null;
};

const COLLECTIONS_INITIAL_STATE: CollectionsState = {
  collections: [],
  isFetching: false,
  errorMessage: null,
};

const shopReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  action = {} as CollectionAction
) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
