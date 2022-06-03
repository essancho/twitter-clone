import React from 'react';
import * as S from './styles';

type Props = {};

const FrontRight = (props: Props) => {
  return (
    <S.FrontRight>
      <S.FrontText size="62px" weight={700}>
        FOLLOW YOUR INTERESTS
      </S.FrontText>
      <S.FrontText size="42px">JOIN TWITTER RIGHT NOW</S.FrontText>
      <div
        style={{
          display: 'flex',
          margin: '30px 0',
          justifyContent: 'space-between',
        }}
      >
        <S.FrontButton color="#89a6fd">Register</S.FrontButton>
        <S.FrontButton color="#d6c7c7">Login</S.FrontButton>
      </div>
    </S.FrontRight>
  );
};

export default FrontRight;
