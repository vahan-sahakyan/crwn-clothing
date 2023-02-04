import { AnyAction } from 'redux';

export type DirectoryState = {
  sections: Array<{
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
    linkUrl: string;
  }>;
};

export const DIRECTORY_INITIAL_STATE: DirectoryState = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/bXRkmbK/womens-1-2.jpg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/0y9Mkh2/mens-1-2.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens',
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/Pr3HcQ8/hats-1-2.jpg',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/M1fHzBQ/jackets-1-2.jpg',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/jgnSvHb/sneakers-1-2.jpg',
      id: 5,
      linkUrl: 'shop/sneakers',
    },
  ],
};

const directoryReducer = (state = DIRECTORY_INITIAL_STATE, action: AnyAction): DirectoryState => {
  return state;
};

export default directoryReducer;
