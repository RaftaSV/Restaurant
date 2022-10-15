import {StyleImageBanner, StyleSocialNetwork, StyleTiktok, StyleWrapper} from './style';
import LogoBanner from 'components/Images/App/logo.png'
import {useTranslation} from 'react-i18next';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Facebook from 'components/Atoms/Icons/Facebook';
import Instagram from 'components/Atoms/Icons/Instagram';
import Tiktok from 'components/Atoms/Icons/Tiktok';

const Banner = () => {
const {t} = useTranslation();
const welcome = t('Welcome');
const Address = t('Address');
const Phone = t('Phone');
const Vermenu = t('Vermenu');



  const redirectTo = (Site) => {
    if(Site === 'Facebook'){
    window.location = 'https://www.facebook.com/100083842727240';
  }else if(Site=== 'Instagram'){
      window.location = 'https://www.instagram.com/rositasrestauante';
    }else if(Site === 'Vermenu'){
      window.location = 'https://www.canva.com/design/DAFIeapa51k/9HlV6p_5QoFUNGs1iaH8gg/view?website#1:men';
    }else{
      window.location = 'https://www.tiktok.com/@rositasrestaurante';
    }

  }
  return(

    <StyleWrapper>
      <Title size={40}>{welcome}</Title>
      <StyleImageBanner loading="lazy" src={LogoBanner}/>
      <Title size={20}>{Address}</Title>
      <Title size={20}>{Phone}</Title>

      <Button onClick={() => redirectTo('Vermenu') } color={'transparent'}><Vermenu/> <Title size={20}>Ver Menu</Title></Button>
      <StyleSocialNetwork>
      <Button onClick={() => redirectTo('Facebook') } color={'transparent'}><Facebook/></Button>
      <Button onClick={() => redirectTo('Instagram') } color={'transparent'}><Instagram/></Button>
        <StyleTiktok>
        <Button onClick={() => redirectTo('Tiktok') } color={'transparent'}><Tiktok/></Button>
        </StyleTiktok>
      </StyleSocialNetwork>
      </StyleWrapper>
  );

};

export default Banner;
