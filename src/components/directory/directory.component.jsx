import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles';
import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, title, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          {...otherSectionProps}
        ></MenuItem>
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
