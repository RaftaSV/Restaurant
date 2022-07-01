import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled.div`
  margin-top: -5%;
  max-width: 100%;
  max-height: 670px;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  display: flex;
  align-items: center;
  position: static;
  flex-direction: column;

  `;

export const StyleImage = styled.img`
  border-radius: 12px;
  max-width: 600px;
  object-fit: cover;
  top: 50%;
`;



export const StyleButtonRegresar = styled(Button)`
  position: absolute;
  background:${({ theme }) => theme.colors.success};
  color:${({ theme }) => theme.colors.Backgraund};
  min-width: auto;
  padding: 0;
  width:80px;
  height: 60px;
  right: 10px;
  top: 80%;
  border-radius: 50px;
  font-size: 60px;
`;
