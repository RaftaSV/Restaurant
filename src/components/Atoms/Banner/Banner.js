import {StyleImageBanner, StyleWrapper} from './style';
import LogoBanner from 'components/Images/App/rositaBanner.png'

const Banner = () => {

  return(
    <StyleWrapper>
      <StyleImageBanner loading="lazy" src={LogoBanner}/>
    </StyleWrapper>
  );

};

export default Banner;
