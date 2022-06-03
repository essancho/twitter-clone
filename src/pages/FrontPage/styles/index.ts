import styled from 'styled-components';
import bg from '../../../assets/front-bg.png';
export const FrontWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export const FrontLeft = styled.div`
  width: 50%;
  background-image: url(${bg});
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const FrontImg = styled.img`
  width: 520px;
`;
