import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: auto;
  padding: 20px;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: -10px;

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
  margin-left: 10%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyleTiktok = styled.div`
margin-top: 10px;
`;

export const StyleViewMenu = styled.div`
  background: ${({ theme }) => theme.colors.nav};
  border-radius: 10px;
`;
