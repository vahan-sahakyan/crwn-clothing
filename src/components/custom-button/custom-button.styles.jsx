import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #333;
  color: white;
  border: none;

  &:hover {
    background-color: #0000;
    color: #333;
    border: 1px solid #333;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  &:hover {
    background-color: #357ae8;
    border: 1px solid #0000;
  }
`;
const invertedButtonStyles = css`
  background-color: #fff;
  color: #333;
  border: 1px solid #333;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: inherit;
  font-size: 16px;

  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #0000;

  ${getButtonStyles}
`;
