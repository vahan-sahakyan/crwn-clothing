import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
    console.log(this.state.collections);
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1> SHOP PAGE</h1>
        <div className="collections">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    );
  }
}
export default ShopPage;
