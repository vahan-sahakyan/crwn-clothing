export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE',
}

export type CollectionItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type Collection = {
  title: string;
  imageUrl: string;
  items: CollectionItem[];
};
