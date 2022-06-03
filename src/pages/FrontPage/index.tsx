import { TwitterLogo } from 'phosphor-react';
import React from 'react';
import FrontRight from '../../modules/Front/FrontRight';

import { StyledFrontLeft, StyledFrontWrapper } from './Styles/frontPage';

const FrontPage = () => {
  return (
    <StyledFrontWrapper>
      <StyledFrontLeft>
        <TwitterLogo color="#ffffff" weight="fill" size={260} />
      </StyledFrontLeft>
      <FrontRight />
    </StyledFrontWrapper>
  );
};

export default FrontPage;
