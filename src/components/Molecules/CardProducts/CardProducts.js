import Title from 'components/Atoms/Title';
import {StyleImage, StyleNumber, StylePrice, StyleWrapper} from './style';



export const CardProducts = ({ name, price,description , number, image }) => {
  return (
    <StyleWrapper>
      <StylePrice><Title size={25}>${price}</Title> </StylePrice>
      <StyleNumber> <h2>{number}</h2> </StyleNumber>
      <StyleImage loading="lazy" src={image} />
      <Title size={18} color={'nameProduct'}>{name}</Title>
      <Title size={17} > {description} </Title>
    </StyleWrapper>
  );
};



