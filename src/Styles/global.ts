import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    body {
        background-color: black;
        font-family: 'Noto Sans', sans-serif;
    }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  display: flex;
`;

export const StyledMain = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #575b5f;
  border-right: 1px solid #575b5f;
  height: 100vh;
`;

export const StyledLeft = styled.div`
  width: 25%;
`;

export const StyledRight = styled.div`
  width: 25%;
`;

export const StyledTop = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
