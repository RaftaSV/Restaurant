import styled from 'styled-components';

export const StyleWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding:4px;
  margin-left: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 400px;


 `;

export const StyleImage = styled.img`
  border-radius: 12px;
  max-width: 300px;
  display: flex;
  width: 100%;
`;


export const StylePrice = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nav};
  transform: rotate(45deg);
  padding: 5px;
  right: 19px;
  bottom: 10px;
  width: 60px;
  height: 60px;
`;
export const StylePriceText = styled.div`
  background-color: ${({ theme }) => theme.colors.transparent};
  transform: rotate(-45deg);
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

export const  StyleDescription = styled.div`
  margin-left: -20%;
  width: 70%;
`;
