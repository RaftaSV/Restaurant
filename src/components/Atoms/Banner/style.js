
import {mediaQueries} from 'styles/theme';
import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 20px;
  margin: 0 auto;

  overflow-x: hidden;
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

export const StyleSocialPhone = styled.div`

  ${mediaQueries.mobile}{
    display: flex;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-content: center;
  }
  ${mediaQueries.tablet}{
    display: none;
  }
  ${mediaQueries.desktop}{
    display: none;
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


export const StyleGalleryWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyleGalleryCard = styled.div`
  width: 280px;
  text-align: center;
`;

export const StyleGalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

export const StyleGalleryText = styled.p`
  margin-top: 50px;
  font-size: 16px;
`;


export const StyleMenuGrid = styled.div`
  display: grid;
  gap: 22px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;

  grid-template-columns: repeat(4, minmax(240px, 1fr));

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(240px, 1fr));
  }

  /* tablets */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  /* ✅ celulares: 1 columna */
  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 14px;
    padding: 0 12px;

    & > * {
      min-width: 0 !important;
    }
  }
`;

export const StyleMenuCard = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  justify-self: stretch;

  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background:
    radial-gradient(220px 160px at 18% 12%, rgba(246,166,35,.18), transparent 70%),
    radial-gradient(260px 200px at 80% 25%, rgba(246,166,35,.10), transparent 70%),
    linear-gradient(180deg, rgba(25,25,25,.92), rgba(8,8,8,.98));
  box-shadow: 0 14px 35px rgba(0,0,0,.18);

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const StyleMenuCardFull = styled(StyleMenuCard)`
  grid-column: 1 / -1;
  width: 100%;
  max-width: 1400px;
  justify-self: stretch;
`;

export const StyleMenuImage = styled.img`
  width: 100%;
  max-width: 650px;   /* 🔥 más grande */
  height: auto;
  object-fit: contain;
  padding: 14px 14px 0 14px;
  display: block;
  margin: 0 auto;
   transition: transform 0.3s ease;

  @media (max-width: 768px) {
  max-width: 420px;
}

@media (max-width: 480px) {
  max-width: 300px;
}
`;

export const StyleMenuBottom = styled.div`
  padding: 14px;
  background: transparent;
`;

export const StyleMenuTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,.10);

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const StyleMenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const StyleMenuBadgeNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;

  color: #f6a623;
  font-weight: 900;
  border: 2px solid rgba(246,166,35,.7);
  background: rgba(0,0,0,.35);
  flex: 0 0 auto;
`;
export const StyleMenuTitleWrap = styled.div`
  min-width: 0;
`;

export const StyleMenuTitle = styled.div`
  color: rgba(255,255,255,.95);
  font-weight: 800;
  font-size: 16px;
  line-height: 1.1;

  /* ✅ en móvil permitimos 2 líneas */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const StyleMenuSubtitle = styled.div`
  color: rgba(255,255,255,.65);
  font-size: 12px;
  margin-top: 2px;
`;

export const StyleMenuPrice = styled.div`
  padding: 6px 12px;
  border-radius: 14px;
  font-weight: 900;
  color: #000;
  background: #f6a623;
  box-shadow: 0 6px 14px rgba(246,166,35,.25);
  flex: 0 0 auto;
`;




export const StyleMenuSection = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 0 0 30px 0;
`;

export const StyleMenuSectionTitle = styled.h2`
  text-align: center;
  font-weight: 800;
  color: #f6a623;
  margin-top: 80px;
  font-size: clamp(26px, 6vw, 44px);

  text-shadow:
    0px 3px 8px rgba(0,0,0,0.45),
    0px 0px 25px rgba(246,166,35,0.25);
`;

export const StyleMenuList = styled.ul`
  list-style: inside;
  margin: 0;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(0,0,0,.28);
  border: 1px solid rgba(255,255,255,.10);
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 20px;
  margin: 0;

  li {
    color: rgba(255,255,255,.88);
    font-size: 13px;
    line-height: 1.35;
    margin: 6px 0;
    display: flex;
    gap: 8px;
    align-items: baseline;
  }

  li::before {
    content: "•";
    color: #f6d27a;
    font-weight: 900;
  }

  /* ✅ compacto en móvil */
  @media (max-width: 600px) {
    padding: 8px 10px;

    li {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;

export const StyleMenuDivider = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 4px;
  margin: 10px auto 24px auto;

  background: linear-gradient(
    90deg,
    transparent,
    #f6a623,
    #f6a623,
    transparent
  );

  border-radius: 20px;
  box-shadow: 0 0 18px rgba(246,166,35,.25);

  @media (max-width: 600px) {
    height: 3px;
    margin: 8px auto 16px auto;
  }
`;

export const StyleMenuLists = styled.div`
 margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  /* ✅ SIEMPRE en paralelo */
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export const StyleMenuFullDivider = styled.div`
  width: 100%;
  height: 4px;
  margin: 14px 0 30px 0;

  background: linear-gradient(
    90deg,
    transparent,
    #f6a623,
    #f6a623,
    #f6a623,
    transparent
  );

  box-shadow: 0 0 20px rgba(246,166,35,.35);
`;


export const StyleMenuDividerSizes = styled.div`
  width: 100%;
  height: 2px;
  margin: 12px 0;

  background: linear-gradient(
    90deg,
    transparent,
    #ffffff55,
    #ffffffaa,
    #ffffff55,
    transparent
  );

  box-shadow: 0 0 8px rgba(255,255,255,.25);
`;




export const StyleMenuSizeLabel = styled.span`
  opacity: 0.95;
`;

export const StyleMenuSizePrice = styled.span`
  font-weight: 800;
`;

export const StyleMenuSizes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 14px 0;
`;

export const StyleMenuSizeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-weight: 600;
`;



