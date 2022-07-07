import { StyleImageBanner, StyleWrapper} from './style';
import LogoBanner from 'components/Images/App/logo.png'
import {useTranslation} from 'react-i18next';
import Title from '../Title';

const Banner = () => {
const {t} = useTranslation();
const welcome = t('Welcome');
const Address = t('Address');
const Phone = t('Phone');

  return(
    <StyleWrapper>
        <Title size={60}>{welcome}</Title>
      <StyleImageBanner loading="lazy" src={LogoBanner}/>
      <Title size={20}>{Address}</Title>
      <Title size={20}>{Phone}</Title>
    </StyleWrapper>
  );

};

export default Banner;
