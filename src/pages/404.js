import   Card404  from 'components/Molecules/Card404'
import Navbar from 'components/Organisms/Navbar';

document.title = 'NotFound';

function NotFound() {
  return (
    <>
    <Navbar/>
    <Card404 />
    </>
  );
}

export default NotFound;
