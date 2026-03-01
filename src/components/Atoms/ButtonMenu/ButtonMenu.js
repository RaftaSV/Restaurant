import { StyleWrapper } from './style';



const ButtonMenu = ({ item, onClick, className }) => {
  return (
    <StyleWrapper onClick={onClick} className={className} type="button">
      {item}
    </StyleWrapper>
  );
};

export default ButtonMenu;