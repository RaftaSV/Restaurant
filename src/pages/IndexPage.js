import Title from '../components/Atoms/Title';
import {useAppLanguage} from '../context/AppLanguaje';

function IndexPage () {
  const {  language, languageToggle } = useAppLanguage();

  return(
    <Title size={17} onClick={languageToggle}>{language}</Title>
  );
}

export default IndexPage;
