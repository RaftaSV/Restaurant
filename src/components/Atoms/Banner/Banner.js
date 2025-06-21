import {
  StyleImageBanner,
  StyleSocialNetwork, StyleSocialPhone,
  StyleViewMenu,
  StyleWrapper,
} from './style';
import LogoBanner from 'components/Images/App/logo.png'
import {useTranslation} from 'react-i18next';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Facebook from 'components/Atoms/Icons/Facebook';
import Instagram from 'components/Atoms/Icons/Instagram';
import Tiktok from 'components/Atoms/Icons/Tiktok';
import WhatsApp from '../Icons/WhatsApp';
import Maps from '../Icons/Maps';
import Container from '../../Organisms/Container';
import Telephone from '../Icons/Phone';

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
      window.location = 'https://www.instagram.com/rositasrestaurantnj';
    }else if(Site === 'Vermenu'){
      window.location = 'https://rositas-restaurant-08822.my.canva.site/para-facebook';
    }else if(Site === 'WhatsApp'){
      window.location = 'https://wa.me/message/3B3DKG6SX4E6C1';
    } else if(Site === 'Tiktok'){
      window.location = 'https://www.tiktok.com/@rositasrestaurantnj';
    } else if(Site === 'order') {
window.location = 'https://rositasrestaurant.hrpos.heartland.us/menu';
}else if(Site === 'Maps') {
window.location = 'https://maps.app.goo.gl/KUkerCaXq99qNZzP6';
}

  }
  return(

    <StyleWrapper>
      <Title size={40}>{welcome}</Title>
      <StyleImageBanner loading="lazy" src={LogoBanner}/>
      <Title size={20}>{Address}</Title>
      <Title size={20}>{Phone}</Title>
      <StyleViewMenu>
      <Button onClick={() => redirectTo('Vermenu') } color={'button'}> <Title size={20}>{seeMenu}</Title></Button>
      </StyleViewMenu>
      <StyleViewMenu>
<Button onClick={() => redirectTo('order') } color={'button'}> <Title size={20}>{orderHere}</Title></Button>
     </StyleViewMenu>
      <Container widthTablet={'70'} widthMobile={'70'} widthDesktop={'70'}>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Facebook')} color={'transparent'}><Facebook/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Instagram')} color={'transparent'}><Instagram/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('WhatsApp')} color={'transparent'}><WhatsApp/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Tiktok')} color={'transparent'}><Tiktok/></Button>
        </StyleSocialNetwork>
        <StyleSocialNetwork>
          <Button onClick={() => redirectTo('Maps')} color={'transparent'}> <Maps/></Button>
        </StyleSocialNetwork>
        <StyleSocialPhone>
          <Button
            onClick={()=>{
              window.location.href='tel:+9088247582';
            }}
            color={'transparent'}> <Telephone/></Button>
        </StyleSocialPhone>
      </Container>
    </StyleWrapper>
  );

};

export default Banner;
