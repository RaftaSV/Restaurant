import styled from 'styled-components';


export const StyleWrapper = styled.div `
  max-height: 80%;
   background: ${({ theme }) => theme.colors.background};
 `;

export const StyleCarousel = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  text-align: center;
  width: 85%;
  margin-left: 8%;


  .slick-dots li.slick-active button:before {
    color:  ${({ theme }) => theme.colors.text};
  }

  .slick-prev:before,
  .slick-next:before {
    color:  ${({ theme }) => theme.colors.text};
    font-size: 50px;
    margin-left: -50%;
  }
`;

