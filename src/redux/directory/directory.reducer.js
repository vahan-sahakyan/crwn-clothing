const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl:
        'https://images.pexels.com/photos/4862517/pexels-photo-4862517.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-4862517.jpg&fm=jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842811.jpg&fm=jpg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/mens',
    },
    {
      title: 'hats',
      imageUrl:
        'https://images.pexels.com/photos/1751150/pexels-photo-1751150.jpeg?cs=srgb&dl=pexels-rodolfo-quirós-1751150.jpg&fm=jpg',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?cs=srgb&dl=pexels-mart-production-7679798.jpg&fm=jpg',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.pexels.com/photos/6777991/pexels-photo-6777991.jpeg?cs=srgb&dl=pexels-hipkicks-6777991.jpg&fm=jpg',
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
