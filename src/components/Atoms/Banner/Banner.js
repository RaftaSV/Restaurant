import {
  StyleImageBanner,
  StyleSocialNetwork,
  StyleButton,
  StyleViewMenu,
  StyleWrapper,
  StyleTiktok,
  StyleCenter
} from './style';
import LogoBanner from 'components/Images/App/logo.png'
import {useTranslation} from 'react-i18next';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Facebook from 'components/Atoms/Icons/Facebook';
import Instagram from 'components/Atoms/Icons/Instagram';
import Tiktok from 'components/Atoms/Icons/Tiktok';
import WhatsApp from '../Icons/WhatsApp';

const Banner = () => {
const {t} = useTranslation();
const welcome = t('Welcome');
const Address = t('Address');
const Phone = t('Phone');
const seeMenu = t('seeMenu');
const orderHere = t('order');


  const redirectTo = (Site) => {
    if(Site === 'Facebook'){
    window.location = 'https://www.facebook.com/100083842727240';
  }else if(Site=== 'Instagram'){
      window.location = 'https://www.instagram.com/rositasrestauante';
    }else if(Site === 'Vermenu'){
      window.location = 'https://rositas-restaurant-08822.my.canva.site/rosita-s-restaurant-menu';
    }else if(Site === 'WhatsApp'){
      window.location = 'https://wa.me/message/3B3DKG6SX4E6C1';
    } else if(Site === 'Tiktok'){
      window.location = 'https://www.tiktok.com/@rositasrestaurante';
    } else if(siete === 'order') {
window.location = 'https://rositasrestaurant.hrpos.heartland.us/menu';
}

  }
  return(

    <StyleWrapper>
      <Title size={40}>{welcome}</Title>
      <StyleImageBanner loading="lazy" src={LogoBanner}/>
      <Title size={20}>{Address}</Title>
      <Title size={20}>{Phone}</Title>
      
      <StyleViewMenu>
      <Button onClick={() => redirectTo('Vermenu') } color={'transparent'}> <Title size={20}>{seeMenu}</Title></Button>
 <Button onClick={() => redirectTo('order') } color={'transparent'}> <Title size={20}>{orderHere}</Title></Button>
      </StyleViewMenu>
        <StyleSocialNetwork>
          <StyleButton>
      <Button onClick={() => redirectTo('Facebook') } color={'transparent'}><Facebook/></Button>
      </StyleButton>
      <StyleCenter>
      <Button onClick={() => redirectTo('Instagram') } color={'transparent'}><Instagram/></Button>
      </StyleCenter>
          <StyleCenter>
        <Button onClick={() => redirectTo('WhatsApp') } color={'transparent'}><WhatsApp/></Button>
      </StyleCenter>
        <StyleTiktok>
        <Button onClick={() => redirectTo('Tiktok') } color={'transparent'}><Tiktok/></Button>
        </StyleTiktok>
      </StyleSocialNetwork>
      </StyleWrapper>
  );

};

export default Banner;
