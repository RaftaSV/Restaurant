import Modal from 'components/Atoms/Modal';
import {StyleCloseBtnQR, StyleRQModal} from './style';
import QR  from 'components/Images/App/QR_Rosita_Restaurant.png';
const QRModal = ({ visible, onCancel }) => {

  return (
    <Modal
      closeButton={false}
      isOpen={visible}

    >

      <StyleCloseBtnQR onClick={onCancel} labelColor="text" color="shadowInput">
        X
      </StyleCloseBtnQR>

      <StyleRQModal src={QR}/>

    </Modal>
  );
};

export default QRModal;
