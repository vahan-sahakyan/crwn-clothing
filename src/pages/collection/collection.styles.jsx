import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 2em;
  font-weight: 400;
  letter-spacing: -1.5px;
  margin: 0 auto 30px;

  margin-bottom: 88px;
`;

export const CollectionItemsContainer = styled.div`
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
  gap: 2.3vw;

  & > * {
    flex: 1;
    min-width: 20vw;
    max-width: 20vw;
    margin-bottom: 30px;
  }
`;
