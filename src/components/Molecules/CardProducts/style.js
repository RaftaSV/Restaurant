import styled from 'styled-components';

export const StyleWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  height: 450px;
  margin-top: 160px;
  @media screen and (min-width: 768px) {
    margin-left: 5px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 440px;

  }



 `;

export const StyleImage = styled.img`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;


export const StylePrice = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.price};
  transform: rotate(45deg);
  padding: 5px;
  top: 130px;
  right: 20px;
  width: 60px;
  height: 60px;
  @media screen and (min-width: 768px) {
    top: 11px;
    right: 20px;
    width: 60px;
    height: 60px;
  }
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
  background-color: ${({ theme }) => theme.colors.price};
  border-radius: 60px;
  padding: 10px;
  height: 40px;
  align-items: center;
  left: 30px;
  top:130px;
  @media screen and (min-width: 768px) {
    left: 30px;
    top:8px;
  }
`;

export const  StyleDescription = styled.div`
  width: 100%;
  height: 50%;
`;
