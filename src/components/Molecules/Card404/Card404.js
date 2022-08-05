import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import Title from 'components/Atoms/Title';
import error from 'components/Images/App/code-error.png';
import Return from 'components/Atoms/Icons/Return';
import {StyleImage, StyleWrapper, StyleButtonRegresar} from './style';
import { useTranslation } from 'react-i18next';




const Card404 = ()  => {
  const {t} = useTranslation();
  return (
    <StyleWrapper>
      <Title size={60}>{t('message.notfound')}</Title>
      <Link to={ROUTES.MAIN.absolutePath}>
        <StyleButtonRegresar>
          <Return/>
        </StyleButtonRegresar>
      </Link>
      <StyleImage  src={error} />
    </StyleWrapper>
  );
};

export default Card404;
