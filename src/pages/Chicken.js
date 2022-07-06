import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function Chicken() {
  document.title='Dish';
  const {t} = useTranslation();
  const chickenPlatters = t('chickenPlatters', { returnObjects: true });
  const separator = t('chicken');
  return (
    <Layout>
      <Carousel data={chickenPlatters} separator={separator}>
      </Carousel>
    </Layout>

  );
}
