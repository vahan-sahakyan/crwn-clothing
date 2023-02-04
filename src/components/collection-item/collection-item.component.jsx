import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddToCartButton,
} from './collection-item.styles';

const CollectionItem = props => {
  const {
    item,
    item: { name, price, imageUrl },
  } = props;

  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
