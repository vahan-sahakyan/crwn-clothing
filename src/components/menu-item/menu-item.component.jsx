import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = props => {
  console.log('[ MENU-ITEM ]');
  const { title, imageUrl, size, linkUrl, history, match } = props;
  console.log(match.url);
  console.log(match.path);

  return (
    <MenuItemContainer
      className={`${size ? size : ''} ${title.toLowerCase()} `}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
