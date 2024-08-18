import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

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
  ${mediaQueries.mobile}{
    margin-top: -6%;
    margin-left: -10%;
    width: 100%;
  }
  ${mediaQueries.tablet}{
    margin-top: -6%;
    margin-left: -10%;
    width: 90%;
  }
  ${mediaQueries.desktop}{
    margin-top: -6%;
    margin-left: -10%;
    width: 50%;
  }
`;

export const StyleSocialNetwork = styled.div`

  ${mediaQueries.mobile}{
    display: flex;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-content: center;
  }
  ${mediaQueries.tablet}{
    display: flex;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-content: center;
  }
  ${mediaQueries.desktop}{
    display: flex;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-content: center;
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
  border-radius: 10px;
  margin-top:10px;
`;

