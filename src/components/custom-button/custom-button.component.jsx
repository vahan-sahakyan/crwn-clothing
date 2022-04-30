import React from 'react';

import './custom-button.styles.scss';

const CustomButton = props => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''}${
        inverted ? 'inverted' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
