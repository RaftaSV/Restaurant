import styled from 'styled-components';
import Button from '../../Atoms/Button';

export const StyleMenuNavbar = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;

`;
export const StyleImage = styled.img`
  border-radius: 12px;
  max-width: 75px;
  width: 100%;
  height: 100%;
`;

export const StyleMenuItem = styled(Button)`
  margin-right: 10px;
  min-width: auto;
  transition: color 0.3s;
  font-weight: 700;
  margin-top: 5px;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyleLanguage = styled.div`
  margin-right: 10px;
  width: 50px;
  min-width: auto;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

