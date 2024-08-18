import styled from "styled-components";

import { mediaQueries } from "styles/theme";

export const StyleWrapper = styled.div`
background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 10px;
  display flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
${mediaQueries.mobile} {
width: 150px;
height 150px;
}

${mediaQueries.tablet} {
width: 200px;
height 100px;
}

${mediaQueries.desktop} {
width: 200px;
height 100px;
}
`;