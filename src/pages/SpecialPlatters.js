import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function SpecialPlatters() {
  document.title='Dish';
  const {t} = useTranslation();
  const dataSpecialDish = t('SpecialPlatter', { returnObjects: true });
  const separator = t('SpecialDish');
  return (
    <Layout>
      <Carousel data={dataSpecialDish} separator={separator}>
      </Carousel>
    </Layout>

  );
}
