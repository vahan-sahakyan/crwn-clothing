import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  // min-width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #6b6010;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  // &.large {
  // }
  &.womens {
    grid-column: span 3;
    // grid-row: 1 / 3;
  }
  &.mens {
    grid-column: span 3;
    // grid-row: 1 / 3;
  }
  &.sneakers,
  &.jackets,
  &.hats {
    grid-column: span 2;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  width: 125px;
  padding: 0 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #3e3705;
  background-color: #fff8;
  backdrop-filter: blur(5px);
  // opacity: 0.7;
  position: absolute;

  white-space: nowrap;
`;
export const ContentTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 22px;
  color: #333;
  margin: 0;
`;

export const ContentSubtitle = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
