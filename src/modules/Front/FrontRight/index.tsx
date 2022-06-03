import React from 'react';
import {
  StyledFrontButton,
  StyledFrontRight,
  StyledFrontText,
} from './Styles/frontRight';

type Props = {};

const FrontRight = (props: Props) => {
  return (
    <StyledFrontRight>
      <StyledFrontText size="62px" weight={700}>
        FOLLOW YOUR INTERESTS
      </StyledFrontText>
      <StyledFrontText size="42px">JOIN TWITTER RIGHT NOW</StyledFrontText>
      <div
        style={{
          display: 'flex',
          margin: '30px 0',
          justifyContent: 'space-between',
        }}
      >
        <StyledFrontButton color="#89a6fd">Register</StyledFrontButton>
        <StyledFrontButton color="#d6c7c7">Login</StyledFrontButton>
      </div>
    </StyledFrontRight>
  );
};

export default FrontRight;
