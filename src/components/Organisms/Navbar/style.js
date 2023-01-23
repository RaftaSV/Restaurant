import styled from 'styled-components';

export const StyleNavbar = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(2 1 1 / 10%) 0 5px 20px -5px;
  background: ${({ theme }) => theme.colors.nav};
  z-index: ${({ theme }) => theme.zIndex.nav};
`;



export const Home = styled.button`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.transparent}; ;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 40px;
  font-size: 25px;
`;
