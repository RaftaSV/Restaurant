import { Container } from 'react-grid-system';
import Navbar from 'components/Organisms/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Container>{children}</Container>
    </>


  );
};

export default Layout;
