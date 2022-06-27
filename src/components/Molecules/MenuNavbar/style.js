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
  padding: 1px 10px;
  transition: color 0.3s;
  font-weight: 700;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

