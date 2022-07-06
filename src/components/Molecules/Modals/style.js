import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleCloseBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  min-width: auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
`

export const StyleMenuNavbar = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .active-item {
    button.btn {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

