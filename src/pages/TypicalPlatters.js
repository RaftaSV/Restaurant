import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function TypicalPlatters() {
  document.title='Dish';
  const {t} = useTranslation();
  const typicalPlatter = t('typicalPlatter', { returnObjects: true });
  const separator = t('typicalPlatters');
  return (
    <Layout>
      <Carousel data={typicalPlatter} separator={separator}>
      </Carousel>
    </Layout>

  );
}
