
import Banner from 'components/Atoms/Banner';
import Separator from 'components/Atoms/Separator';
import { GetSpecialPlatters }from 'Data/Data'
import {Col, Row} from 'react-grid-system';
import  CardProducts  from 'components/Molecules/CardProducts';
import Layout from '../components/Organisms/Layout';

document.title = 'Home';

function Main() {
const data = GetSpecialPlatters();

  return (
   <Layout>
        <Banner/>
        <Separator Name={'Special Platters'}></Separator>
      <Row>
        {data?.map(( Platter ) => {
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
