import React from 'react';
import Directory from '../../components/directory/directory.component';
// import MenuItem from '../../components/menu-item/menu-item.component';

import './homepage.styles.scss';

const HomePage = props => {
  console.log(props);

  return (
    <div className="homepage">
      <h1>HOME PAGE</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
