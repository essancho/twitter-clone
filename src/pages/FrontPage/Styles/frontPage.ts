import styled from 'styled-components';
import bg from '../../../assets/front-bg.png';
export const StyledFrontWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export const StyledFrontLeft = styled.div`
  width: 50%;
  background-image: url(${bg});
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const StyledFrontImg = styled.img`
  width: 520px;
`;
