import styled from 'styled-components';


export const StyleWrapper = styled.div `
   background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  text-align: center;

    .slick-dots li.slick-active button:before {
      color:  ${({ theme }) => theme.colors.text};
  }

  .slick-prev:before,
  .slick-next:before {
    color:  ${({ theme }) => theme.colors.text};
    font-size: 40px;
    margin-left: -50%;
  }
 `;
