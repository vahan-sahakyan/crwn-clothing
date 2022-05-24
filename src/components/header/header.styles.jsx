import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4em 6vw;
  letter-spacing: -1.2px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
`;

export const OptionsContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  gap: 4vw;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  font-size: 2em;

  // flex: 1;
  min-width: fit-content;
  text-align: right;

  @media (max-width: 580px) {
    font-size: 1.5em;
    font-weight: 300;
  }
`;
