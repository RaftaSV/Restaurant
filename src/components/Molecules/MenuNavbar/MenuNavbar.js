import useModal from 'Hooks/useModal';
import {useTranslation} from 'react-i18next';
import { useAppTheme } from 'context/AppTheme';
import logo from 'components/Images/App/logo.png';
import {useAppLanguage} from 'context/AppLanguaje';
import English from 'components/Atoms/Flag/English';
import Spanish from 'components/Atoms/Flag/Spanish';
import {ModalMenu} from 'components/Molecules/Modals';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import ButtonBurger from 'components/Atoms/ButtonBurguer';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import {StyleImage, StyleItemLeft, StyleLanguage, StyleMenuItem, StyleMenuNavbar} from './style';


const MenuNavbar = () => {

  const language = localStorage.getItem('land');
  const {i18n} = useTranslation();
  const { themeToggle, theme } = useAppTheme();
  const {languageToggle} = useAppLanguage();
  const onChangeLanguage = () => {
    languageToggle();
    i18n.changeLanguage(language);

  };

  const { visible, onToggle } = useModal();
  return (
    <>
      <StyleItemLeft>
      <ButtonBurger onClick={onToggle} isOpen={visible} />
      <StyleImage
        loading="lazy"
        src={logo}/>
      </StyleItemLeft>
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
      <ModalMenu onCancel={onToggle} visible={visible} />
    </>

  );
};

export default MenuNavbar;
