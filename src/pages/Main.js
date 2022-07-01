
import Banner from 'components/Atoms/Banner';
import Separator from 'components/Atoms/Separator';

import {Col, Row} from 'react-grid-system';
import Layout from '../components/Organisms/Layout';
import { CardProducts } from '../components/Molecules/CardProducts';
import {useTranslation} from 'react-i18next';

document.title = 'Home';

function Main() {
  const {t} = useTranslation();
  const dataSpecialDish = t('SpecialPlatter', { returnObjects: true });

  return (
   <Layout>
        <Banner/>

       <Separator  Name={t('SpecialDish')}></Separator>


      <Row>
        {dataSpecialDish?.map(( Platter ) => {
          const {name , number , description, price, image} = Platter;
          return (
            <Col key={number} xs={15} md={5} lg={4}>
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
      </Row>
   </Layout>
  );

}

export default Main;
