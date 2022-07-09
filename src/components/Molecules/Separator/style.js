import styled from 'styled-components';

export const StyleWrapper = styled.div`
  margin-top: 3%;
  background: ${({ theme }) => theme.colors.Separator};
  border-radius: 10px;
  height: max-content;
  @media screen and (min-width: 768px) {
    margin-top: 1%;
  }
`;
