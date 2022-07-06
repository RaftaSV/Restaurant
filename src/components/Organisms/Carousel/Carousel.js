import Slider from 'react-slick';
import {Col} from 'react-grid-system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Separator from 'components/Molecules/Separator';
import {StyleCarousel, StyleWrapper} from './style';
import {CardProducts} from 'components/Molecules/CardProducts';

const CustomCarousel = ( { separator , data}) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <StyleWrapper>
      <Separator Name={separator}></Separator>
      <StyleCarousel>
        <Slider {...settings}>
          { data?.map(( Platter ) => {
            const {name , number , description, price, image} = Platter;
            return (
              <Col key={number}>
                <CardProducts
                  name={name}
                  number={number}
                  price={price}
                  description={description}
                  image={image}
                />
              </Col>
            );
          })}
        </Slider>
      </StyleCarousel>
    </StyleWrapper>

  );

}


export default CustomCarousel;
