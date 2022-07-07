import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: auto;
  padding: 20px;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

`;

export const StyleImageBanner = styled.img`
  width: 118%;
  padding: 30px;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    max-width: 61%;
padding: 0;
  }
`;


