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

      <h1>Hola</h1>
      <br/>
      <h1>Hola</h1>
      <br/>
      <h1>Hola</h1>
      <br/>
      <h1>Hola</h1>
    </Modal>
  );
};

export default ModalMenu;
