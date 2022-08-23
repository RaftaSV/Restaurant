import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function Beverages() {
  document.title='Beverages';
  const {t} = useTranslation();
  const dataBeverages = t('beverage', { returnObjects: true });
  const separator = t('beverages');
  return (
    <Layout >
      <Carousel data={dataBeverages} separator={separator}>
      </Carousel>
    </Layout>

  );
}
