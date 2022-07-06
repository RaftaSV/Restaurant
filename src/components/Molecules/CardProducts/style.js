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
  max-width: 300px;
  display: flex;
  width: 100%;
  margin-top: 20px;
`;


export const StylePrice = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nav};
  transform: rotate(45deg);
  padding: 5px;
  right: 20px;
  width: 60px;
  height: 60px;
  top: 13px;
`;
export const StylePriceText = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.transparent};
  transform: rotate(-45deg);
  right: 2px;
  top: 11px;
`;

export const StyleNumber = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nav};
  border-radius: 60px;
  padding: 10px;
  left: 30px;
  top:8px;
  height: 40px;
  align-items: center;
`;

export const  StyleDescription = styled.div`
  display: flex;
  width: auto;
  text-align: justify;
`;
