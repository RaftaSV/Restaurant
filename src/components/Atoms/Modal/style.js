import styled from 'styled-components';

export const StyleBody = styled.div`
  position: relative;
  width: 370px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  flex-direction: column;
  align-content: center;
  z-index: ${({ theme }) => theme.zIndex.max} ;

`;

export const customStyles = {
  overlay: {
    backdropFilter: 'saturate(180%) blur()'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    background: `${({ theme }) => theme.colors.background}`,

  }
};
