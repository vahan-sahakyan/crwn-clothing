import React from 'react';
import './directory.styles.scss';
import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'womens',
          imageUrl:
            'https://images.pexels.com/photos/4862517/pexels-photo-4862517.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-4862517.jpg&fm=jpg',
          size: 'large',
          id: 2,
          linkUrl: 'womens',
        },
        {
          title: 'mens',
          imageUrl:
            'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842811.jpg&fm=jpg',
          size: 'large',
          id: 1,
          linkUrl: 'mens',
        },
        {
          title: 'hats',
          imageUrl:
            'https://images.pexels.com/photos/1751150/pexels-photo-1751150.jpeg?cs=srgb&dl=pexels-rodolfo-quirós-1751150.jpg&fm=jpg',
          id: 3,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl:
            'https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?cs=srgb&dl=pexels-mart-production-7679798.jpg&fm=jpg',
          id: 4,
          linkUrl: 'jackets',
        },
        {
          title: 'sneakers',
          imageUrl:
            'https://images.pexels.com/photos/6777991/pexels-photo-6777991.jpeg?cs=srgb&dl=pexels-hipkicks-6777991.jpg&fm=jpg',
          id: 5,
          linkUrl: 'sneakers',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, ...otherSectionProps }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            {...otherSectionProps}
          ></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
