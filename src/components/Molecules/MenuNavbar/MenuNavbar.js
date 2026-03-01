import useModal from 'Hooks/useModal';
import {useTranslation} from 'react-i18next';




import logo from 'components/Images/App/logo.png';
import {useAppLanguage} from 'context/AppLanguaje';
import English from 'components/Atoms/Flag/English';
import Spanish from 'components/Atoms/Flag/Spanish';
import {ModalMenu, QRModal} from 'components/Molecules/Modals';

//import ButtonBurger from 'components/Atoms/ButtonBurguer';


import {Link} from 'react-router-dom';
import React, { useState } from "react";
import {
  StyleImage,
  StyleItemLeft,
  StyleLanguage,

  StyleMenuNavbar,
  StyleHamburgerBtn,
  StyleMobileMenuPanel,
  StyleMobileMenuItem,
} from "./style";






const MenuNavbar = () => {

  const [open, setOpen] = useState(false);

const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  setOpen(false);
};

  const language = localStorage.getItem('land');
  const {i18n} = useTranslation();

  const {languageToggle} = useAppLanguage();
  const onChangeLanguage = () => {
    languageToggle();
    i18n.changeLanguage(language);

  };

  const { visible, onToggle } = useModal();
  const { visible: visibleQR, onToggle: onToggleQR  } = useModal();

  return (
    <>
     <StyleItemLeft>

        <Link to={'/'}>
      <StyleImage
        loading="lazy"
        src={logo}/>
        </Link>
      </StyleItemLeft>

      
      <StyleMenuNavbar>
     


        

        <StyleLanguage
          onClick={onChangeLanguage}>
          { localStorage.getItem('land') === 'en' ? <English /> : <Spanish />}
        </StyleLanguage>

        {/* ✅ Botón hamburguesa (móvil) */}
<StyleHamburgerBtn
  onClick={() => setOpen(!open)}
  aria-label="Abrir menú"
  type="button"
>
  ☰
</StyleHamburgerBtn>
      </StyleMenuNavbar>

      {open && (
    <StyleMobileMenuPanel>
     <StyleMobileMenuItem onClick={() => goTo("Inicio")}>Inicio</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("Desayunos")}>Desayunos / Breakfast</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("tipicos")}>Platos Típicos / Traditional Dishes</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("appetizers")}>PICADA / APPETIZERS</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("baleadas")}>BALEADAS</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("pupusas")}>PUPUSAS</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("kids")}>kids</StyleMobileMenuItem>
      <StyleMobileMenuItem onClick={() => goTo("contacto")}>Contacto</StyleMobileMenuItem>
    </StyleMobileMenuPanel>
  )}




      <ModalMenu onCancel={onToggle} visible={visible} />
      <QRModal onCancel={onToggleQR} visible={visibleQR} />
    </>
    

  );
};

export default MenuNavbar;
