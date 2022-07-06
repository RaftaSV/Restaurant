import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function KidsMenu() {
  document.title='Dish';
  const {t} = useTranslation();
  const KidsMenuPlatter = t('KidsMenuPlatter', { returnObjects: true });
  const separator = t('KidsMenu');
  return (
    <Layout>
      <Carousel data={KidsMenuPlatter} separator={separator}>
      </Carousel>
    </Layout>

  );
}
