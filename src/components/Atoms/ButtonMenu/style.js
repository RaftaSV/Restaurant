import styled from 'styled-components';
import Button from '../Button';

/**
 * Contenedor del menú (fila de botones)
 * Úsalo dentro del header/navbar.
 */
export const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  height: 50px;
  width: auto;

  /* En móvil, permite salto de línea si hay muchos */
  flex-wrap: wrap;

  /* Quita cualquier fondo raro */
  background: transparent;

  /* Si quieres que NO se pinte todo el contenedor al hover, elimina esto */
  /* &:hover { background: ${({ theme }) => theme.colors.secondary}; } */

  .active-item button.btn {
    color: #f6a623;
    border-color: rgba(246, 166, 35, 0.9);
    background: rgba(246, 166, 35, 0.12);
  }
`;

/**
 * Botón individual del header
 * (usando tu componente Button base)
 */
export const StyleMenuItem = styled(Button)`
  min-width: auto;
  padding: 10px 16px;

  border-radius: 14px;
  border: 1px solid rgba(246, 166, 35, 0.55);

  background: transparent;
  color: #f6a623;

  font-weight: 800;
  font-size: 16px;
  line-height: 1;
  margin: 0;

  transition: all 0.25s ease;

  &:hover {
    opacity: 1;
    background: rgba(246, 166, 35, 0.12);
    transform: translateY(-1px);
  }

  /* Compacto en pantallas pequeñas */
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 9px 12px;
    border-radius: 12px;
  }
`;