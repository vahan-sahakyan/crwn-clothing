import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 5vh 5vw;

  @media (max-width: 580px) {
    gap: 4em;

    > * {
      min-width: 100%;
    }
  }
`;
