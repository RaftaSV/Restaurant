import styled, { css } from 'styled-components';

export const StyleWrapper = styled.div`
  padding: 10px 7px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 200ms;
  

  &:active {
    background-color: rgba(100, 100, 100, 0.1);
  }
`;

const cssBefore = css`
  transform: rotate(-35deg);
  top: 6px;
`;

const cssAfter = css`
  transform: rotate(35deg);
  bottom: 6px;
`;

export const StyleButtonBurger = styled.div`
  position: relative;
  width: 30px;
  height: 14px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 150ms;
    background: ${({ theme }) => theme.colors.text};
  }

  &:before {
    top: 0;
    ${({ $isOpen }) => $isOpen && cssBefore}
  }

  &:after {
    bottom: 0;
    ${({ $isOpen }) => $isOpen && cssAfter}
  }
`;

import styled from 'styled-components';

export const StyleGalleryWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyleGalleryCard = styled.div`
  width: 280px;
  text-align: center;
`;

export const StyleGalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

export const StyleGalleryText = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;
