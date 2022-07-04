import styled from 'styled-components';

export const StyleBody = styled.div`
  position: absolute;
  min-width: 478px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.nav};
  display: flex;
  border: 2px;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.max} ;

`;

export const customStyles = {
  overlay: {
    backdropFilter: 'saturate(180%) blur(20px)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0
  }
};
