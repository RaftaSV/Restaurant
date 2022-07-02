import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {Col} from 'react-grid-system';
import {CardProducts} from '../components/Molecules/CardProducts';
import {useTranslation} from 'react-i18next';
import Carousel from '../components/Atoms/Carousel';
import Layout from '../components/Organisms/Layout';
import Separator from '../components/Atoms/Separator';

document.title = 'Home';

export default function SpecialDish() {

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

  const {t} = useTranslation();
  const dataSpecialDish = t('SpecialPlatter', { returnObjects: true });

  return (
    <Layout>
      <Separator  Name={t('SpecialDish')}></Separator>
 <Carousel>
     <Slider {...settings}>
       { dataSpecialDish?.map(( Platter ) => {
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
      </Carousel>
    </Layout>
      );
}
