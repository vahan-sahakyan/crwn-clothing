import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 360px);

  justify-content: end;
  align-content: end;
  margin-top: 88px;
`;
