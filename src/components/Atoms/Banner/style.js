import styled from 'styled-components';

export const StyleWrapper = styled.div`
  margin-left: 5%;
  width: auto;
  padding: 20px;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: -10px;

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 20px;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-top: -10px;
    margin-left: 5%;
  }
`;

export const StyleImageBanner = styled.img`
  width: 118%;
  padding: 30px;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    margin-top: -70px;
    max-width: 58%;
padding: 0;
  }
`;

export const StyleSocialNetwork = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
   margin-top: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

export const StyleButton = styled.div`
  margin-left: 10px;
  @media screen and (min-width: 768px) {

  }

  `
export const StyleCenter = styled.div`
  padding: 0;
  margin-left: -35px;
 `
export const StyleTiktok = styled.div`
  margin-top: 10px;
  margin-left: -15% ;
  @media screen and (min-width: 768px) {
    margin-left: -40px ;
  }

`;

export const StyleViewMenu = styled.div`
  background: ${({ theme }) => theme.colors.nav};
  border-radius: 10px;
  margin-top:10px;
`;

