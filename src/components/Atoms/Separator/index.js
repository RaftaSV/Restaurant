import {  StyleWrapper } from './style';
import Title from '../Title';

const Separator = ( { Name } ) => {
  return(
    <StyleWrapper>
      <Title children={Name}  ></Title>
    </StyleWrapper>
  );
};

export default Separator;
