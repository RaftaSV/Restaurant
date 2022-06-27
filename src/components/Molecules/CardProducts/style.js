import styled from 'styled-components';

export const StyleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding:40px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;


 `;

export const StyleImage = styled.img`
  border-radius: 12px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  align-content: center;
  display: flex;

`;


export const StylePrice = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nav};
  border-radius: 40px;
  padding: 5px;
  right: 0;
  bottom: 0;
`;

export const StyleNumber = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nav};
  border-radius: 60px;
  padding: 10px;
  left: 2px;
  top:8px;
  height: 40px;
  align-items: center;
`;
