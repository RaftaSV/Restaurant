import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import logo from 'components/Images/App/logo.png'

import {StyleImage, StyleMenuItem, StyleMenuNavbar} from './style';

const MenuNavbar = () => {
  const { themeToggle, theme } = useAppTheme();

  return (
    <>
      <StyleImage
        loading="lazy"
        src={logo}/>
      <StyleMenuNavbar>
        <StyleMenuItem
          color="transparent"
          labelColor="text"
          onClick={themeToggle}
          style={{ fontSize: 19 }}
        >
          {theme === 'light' ? <MoonFilled /> : <SunFilled />}
        </StyleMenuItem>
      </StyleMenuNavbar>
    </>

  );
};

export default MenuNavbar;
