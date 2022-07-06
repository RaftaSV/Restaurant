import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function Breakfast() {
  document.title='Dish';
  const {t} = useTranslation();
  const breakfastPlatters = t('breakfastPlatters', { returnObjects: true });
  const separator = t('breakfast');
  return (
    <Layout>
      <Carousel data={breakfastPlatters} separator={separator}>
      </Carousel>
    </Layout>

  );
}
