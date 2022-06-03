import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../modules/Navbar';
import SidebarLeft from '../../modules/SidebarLeft';
import SidebarRight from '../../modules/SidebarRight';
import {
  MainPage,
  ExplorePage,
  MessagesPage,
  BookmarksPage,
  ListPage,
  ProfilePage,
  NotificationsPage,
} from '../../pages';
import {
  Container,
  Layout,
  StyledInnerContainer,
  StyledLeft,
  StyledMain,
  StyledRight,
} from '../../styles/global';

interface Props {}

const MainLayout: React.FC = (props: Props) => {
  return (
    <Container>
      <Layout>
        <StyledLeft>
          <SidebarLeft />
        </StyledLeft>
        <StyledMain>
          <StyledInnerContainer>
            <Navbar />
            <Routes>
              <Route path="/home" element={<MainPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/lists" element={<ListPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
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