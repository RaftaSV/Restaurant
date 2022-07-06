import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function SeaFood() {
  document.title='Dish';
  const {t} = useTranslation();
  const SeaFoodPlatters = t('SeaFoodPlatters', { returnObjects: true });
  const separator = t('SeaFood');
  return (
    <Layout>
      <Carousel data={SeaFoodPlatters} separator={separator}>
      </Carousel>
    </Layout>

  );
}
