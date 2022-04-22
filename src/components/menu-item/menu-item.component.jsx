import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = props => {
  console.log('[ MENU-ITEM ]');
  const { title, imageUrl, size, linkUrl, history, match } = props;
  console.log(match.url);
  console.log(match.path);
  console.log(linkUrl);

  return (
    <div
      className={`${size ? size : ''} menu-item`}
      onClick={() => history.push(`${match.url}/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);