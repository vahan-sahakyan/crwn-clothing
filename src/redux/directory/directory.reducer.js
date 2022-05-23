const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: '/src/assets/img/directory/womens.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: '../../assets/img/directory/mens.jpg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/mens',
    },
    {
      title: 'hats',
      imageUrl: '/src/assets/img/directory/hats.jpg',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: '/src/assets/img/directory/jackets.jpg',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: '/src/assets/img/directory/sneakers.jpg',
      id: 5,
      linkUrl: 'shop/sneakers',
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
