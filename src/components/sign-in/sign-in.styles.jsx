import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 2em;
  max-width: 40vw;
  flex: 1;
`;

export const FormContainer = styled.div`
  width: auto;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.3em;

  :first-child {
    flex-grow: 2;
  }

  :last-child {
    flex-grow: 3;
  }
`;
