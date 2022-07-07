import {ROUTES} from 'config';
import {NavLink} from 'react-router-dom';
import Modal from 'components/Atoms/Modal';
import {useTranslation} from 'react-i18next';
import {StyleCloseBtn, StyleMenuNavbar} from './style';
import {StyleMenuItem} from 'components/Atoms/ButtonMenu/style';

const ModalMenu = ({ visible, onCancel }) => {
  const {t} = useTranslation();
  const Special = t('SpecialDish');
  const Breakfast = t('breakfast');
  const Chicken = t('chicken');
  const rice = t('rice');
  const seafood = t('SeaFood');
  const KidsMenu = t('KidsMenu');
  const beverages = t('beverages');
  const typicalPlatters = t('typicalPlatters');
  const LinkMenu = ({ to, children, style}) => {
    return (
      <NavLink to={to} className={({ isActive }) => (isActive ? 'active-item' : '')}>
        <StyleMenuItem style={style} color="transparent" >
          {children}
        </StyleMenuItem>
      </NavLink>
    );
  };

  return (
    <Modal
      closeButton={false}
      isOpen={visible}
      contentStyle={{
        top: 26,
        left: -20,
        width: '400px',
        height: '100%',
        background: `${({ theme }) => theme.colors.background}`,
      }}
    >
      <StyleCloseBtn onClick={onCancel} labelColor="text" color="shadowInput">
        X
      </StyleCloseBtn>
      <StyleMenuNavbar>
        <LinkMenu to={ROUTES.BREAKFAST.absolutePath}> {Breakfast} </LinkMenu>
        <LinkMenu to={ROUTES.SPECIAL.absolutePath}>{Special}</LinkMenu>
        <LinkMenu to={ROUTES.CHICKEN.absolutePath}> {Chicken} </LinkMenu>
        <LinkMenu to={ROUTES.RICE.absolutePath}> {rice} </LinkMenu>
        <LinkMenu to={ROUTES.SEAFOOD.absolutePath}> {seafood} </LinkMenu>
        <LinkMenu to={ROUTES.KIDS.absolutePath}> {KidsMenu} </LinkMenu>
        <LinkMenu to={ROUTES.TYPICAL.absolutePath}> {typicalPlatters} </LinkMenu>
        <LinkMenu to={ROUTES.BEVERAGES.absolutePath}> {beverages} </LinkMenu>
      </StyleMenuNavbar>
    </Modal>
  );
};

export default ModalMenu;
