import { TwitterLogo } from 'phosphor-react';
import React from 'react';
import FrontRight from '../../modules/Front/FrontRight';

import * as S from './styles';

const FrontPage = () => {
  return (
    <S.FrontWrapper>
      <S.FrontLeft>
        <TwitterLogo color="#ffffff" weight="fill" size={260} />
      </S.FrontLeft>
      <FrontRight />
    </S.FrontWrapper>
  );
};

export default FrontPage;
