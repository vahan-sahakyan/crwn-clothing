import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          {...otherSectionProps}
        ></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
