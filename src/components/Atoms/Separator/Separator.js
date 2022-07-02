import {  StyleWrapper } from './style';

import Title from '../Title';

const Separator = ( { Name, ...restProps} ) => {
  return(
    <StyleWrapper {...restProps}>
      <Title size={55}   > {Name}</Title>
    </StyleWrapper>
  );
};

export default Separator;
