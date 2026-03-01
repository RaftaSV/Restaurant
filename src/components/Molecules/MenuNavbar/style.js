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
  margin-left: 8%;
`;
export const StyleItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;


export const StyleMenuItem = styled(Button)`
  margin-right: 10px;
  min-width: auto;
  transition: color 0.3s;
  font-weight: 700;
  margin-top: 5px;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyleLanguage = styled.div`
  margin-right: 10px;
  width: 50px;
  min-width: auto;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const StyleHamburgerBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #fff;          /* ✅ Blanco */
  padding: 6px 10px;    /* opcional: más fácil de tocar */
  line-height: 1;

  &:hover {
    opacity: 0.85;
  }
`;

export const StyleMobileMenuPanel = styled.div`
  position: absolute;

  /* ✅ SUBIR EL MENU */
  top: 60px;       /* antes 70-90px */
  right: 20px;

  width: 240px;

  /* ✅ EFECTO GLASS MODERNO */
  background: rgba(20, 20, 20, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 14px;
  padding: 18px 20px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  /* ✅ ESTÉTICA */
  box-shadow:
    0 8px 25px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.05);

  border: 1px solid rgba(255,255,255,0.08);

  z-index: 9999;

  /* ✅ ANIMACION SUAVE */
  animation: menuFade 0.25s ease;

  @keyframes menuFade {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const StyleMobileMenuItem = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  text-align: left;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;