const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://imgcloud.s3.us-east-1.wasabisys.com/HpSfMd9Usf.jpg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://imgcloud.s3.us-east-1.wasabisys.com/zKuH7w8WZp.jpg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/mens',
    },
    {
      title: 'hats',
      imageUrl: 'https://imgcloud.s3.us-east-1.wasabisys.com/VJuqu93rTW.jpg',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://imgcloud.s3.us-east-1.wasabisys.com/6UXw9ZXajM.jpg',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://imgcloud.s3.us-east-1.wasabisys.com/wYJZfqzf7q.jpg',
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
