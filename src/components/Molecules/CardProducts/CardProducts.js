import Title from 'components/Atoms/Title';
import {StyleDescription, StyleImage, StyleNumber, StylePrice, StylePriceText, StyleWrapper} from './style';

export const CardProducts = ({ name, price,description , number, image, ...restProps }) => {

  return (
    <StyleWrapper {...restProps}>
      <StylePrice> <StylePriceText> <Title size={19}>{price}</Title> </StylePriceText></StylePrice>
      <StyleNumber> <h2>{number}</h2> </StyleNumber>
      <StyleImage  src={image}  />
      <Title size={18} color={'nameProduct'}>{name}</Title>
      <StyleDescription>
      <Title size={17} > {description} </Title>
      </StyleDescription>
    </StyleWrapper>
  );
};



