import Title from 'components/Atoms/Title';
import {StyleImage, StyleNumber, StylePrice, StylePriceText, StyleWrapper} from './style';

export const CardProducts = ({ name, price,description , number, image, ...restProps }) => {

  return (
    <StyleWrapper {...restProps}>
      <StylePrice> <StylePriceText> <Title size={30}>${price}</Title> </StylePriceText></StylePrice>
      <StyleNumber> <h2>{number}</h2> </StyleNumber>
      <StyleImage loading="lazy" src={image}  />
      <Title size={18} color={'nameProduct'}>{name}</Title>
      <Title size={17} > {description} </Title>
    </StyleWrapper>
  );
};



