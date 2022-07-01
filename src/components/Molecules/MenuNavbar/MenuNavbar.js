import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import logo from 'components/Images/App/logo.png';
import {StyleImage, StyleLanguage, StyleMenuItem, StyleMenuNavbar} from './style';
import {useTranslation} from 'react-i18next';
import English from '../../Atoms/Flag/English';
import Spanish from '../../Atoms/Flag/Spanish';
import {useAppLanguage} from '../../../context/AppLanguaje';



const MenuNavbar = () => {

  const language = localStorage.getItem('land');
  const {i18n} = useTranslation();
  const { themeToggle, theme } = useAppTheme();
  const {languageToggle} = useAppLanguage();

  const onChangeLanguage = () => {
    languageToggle();
    i18n.changeLanguage(language);

  };
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
        <StyleLanguage
          onClick={onChangeLanguage}>
          { localStorage.getItem('land') === 'en' ? <English /> : <Spanish />}
        </StyleLanguage>

      </StyleMenuNavbar>
    </>

  );
};

export default MenuNavbar;
