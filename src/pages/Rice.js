import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function Rice() {
  document.title='Dish';
  const {t} = useTranslation();
  const ricePlatters = t('ricePlatters', { returnObjects: true });
  const separator = t('rice');
  return (
    <Layout>
      <Carousel data={ricePlatters} separator={separator}>
      </Carousel>
    </Layout>

  );
}
