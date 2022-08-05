import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleCloseBtn = styled(Button)`
  position: absolute;
  top: 7px;
  left: 330px;
  min-width: auto;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 0;
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.modal};
  font-size: 20px;
  &:hover {
    opacity: 0.8;
  }
`

export const StyleCloseBtnQR = styled(Button)`
  position: absolute;
  top: 2px;
 right: 2px;
  min-width: auto;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 0;
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.modal};
  font-size: 20px;
  &:hover {
    opacity: 0.8;
  }
`


export const StyleMenuNavbar = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;


  .active-item {
    button.btn {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const StyleRQModal = styled.img`
  width: 80%;
  height: 80%;
  margin-left: 30px;

`;
export const StyleWrapper = styled.form`
width: 300px;
height: 300px;
`;

