import Modal from 'components/Atoms/Modal';
import { StyleCloseBtn } from './style';

const ModalMenu = ({ visible, onCancel }) => {
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

      <h1>Platos especiales</h1>
      <br/>
      <h1>Mariscos</h1>
      <br/>
      <h1>Pollo</h1>
      <br/>
      <h1>Carne</h1>
      <br/>
      <h1>Tipicos</h1>
      <br/>
      <h1>Otros</h1>
      <br/>
      <h1>Bebidas</h1>

    </Modal>
  );
};

export default ModalMenu;
