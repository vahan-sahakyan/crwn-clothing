import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shop.styles';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default ShopPage;
