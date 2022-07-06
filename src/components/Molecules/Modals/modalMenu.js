import Modal from 'components/Atoms/Modal';
import { StyleCloseBtn } from './style';
import ButtonMenu from 'components/Atoms/ButtonMenu';
import {useTranslation} from 'react-i18next';

const ModalMenu = ({ visible, onCancel }) => {
  const {t} = useTranslation();
  const separator = t('SpecialDish');
  return (
    <Modal
      closeButton={false}
      isOpen={visible}
      contentStyle={{
        top: 26,
        left: -20,
        width: '500px',      }}
    >
      <StyleCloseBtn onClick={onCancel} labelColor="text" color="shadowInput">
        X
      </StyleCloseBtn>

     <ButtonMenu Item={separator}></ButtonMenu>
      <ButtonMenu Item={'Mariscos'}></ButtonMenu>
      <ButtonMenu Item={'Otros'}></ButtonMenu>
      <ButtonMenu Item={'Bebidas'}></ButtonMenu>
    </Modal>
  );
};

export default ModalMenu;
