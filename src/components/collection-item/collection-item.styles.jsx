import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  flex: 1;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: block;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 30vw;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border: 1px solid #6b6010;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  flex: 1;
  margin-bottom: 15px;
`;
export const PriceContainer = styled.span`
  flex: 1;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.8;
  position: absolute;
  top: 22vw;
  display: none;
`;
