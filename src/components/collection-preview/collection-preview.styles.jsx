import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  width: 100%;
  flex: 1 1 auto;
`;

export const TitleContainer = styled.h1`
  width: fit-content;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 25px;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.h1`
  display: flex;
  justify-content: space-between;
  gap: 2vw;
`;
