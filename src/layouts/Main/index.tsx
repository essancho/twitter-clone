import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../modules/Navbar';
import SidebarLeft from '../../modules/SidebarLeft';
import SidebarRight from '../../modules/SidebarRight';
import { NAV_ROUTES } from '../../navigation/routes';

import {
  Container,
  Layout,
  StyledInnerContainer,
  StyledLeft,
  StyledMain,
  StyledRight,
} from '../../styles/global';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Layout>
        <StyledLeft>
          <SidebarLeft NAV_ROUTES={NAV_ROUTES} />
        </StyledLeft>
        <StyledMain>
          <StyledInnerContainer>
            <Navbar />
            <Routes>
              {NAV_ROUTES.map(({ path, Component }) => (
                <Route path={path} element={Component && <Component />} />
              ))}
            </Routes>
          </StyledInnerContainer>
        </StyledMain>
        <StyledRight>
          <StyledInnerContainer>
            <SidebarRight />
          </StyledInnerContainer>
        </StyledRight>
      </Layout>
    </Container>
  );
};

export default MainLayout;
