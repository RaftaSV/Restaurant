import React from "react";
import {useTranslation} from 'react-i18next';
import Layout from 'components/Organisms/Layout';
import Carousel from 'components/Organisms/Carousel';

export default function Soups() {
  document.title='Dish';
  const {t} = useTranslation();
  const SoupsPlatters = t('SoupsPlatters', { returnObjects: true });
  const separator = t('Soups');
  return (
    <Layout>
      <Carousel data={SoupsPlatters} separator={separator}>
      </Carousel>
    </Layout>

  );
}
