import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = props => {
  console.log(props);

  return (
    <HomePageContainer>
      <h1>HOME PAGE</h1>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
